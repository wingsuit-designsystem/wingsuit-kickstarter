ARG BASE_IMAGE_TAG


FROM node:20-alpine AS themebuilder
WORKDIR /var/www/html/
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN ["npx", "@wingsuit-designsystem/cli", "init", "--branch", "2.0.x", "--skip-install"]
WORKDIR /var/www/html/wingsuit
RUN yarn install
RUN yarn build:drupal

FROM wodby/drupal-php:8.3-4.62.3 AS drupalbuilder

ARG DRUPAL_VER

ENV DRUPAL_VER="${DRUPAL_VER}" \
    DOCROOT_SUBDIR="" \
    APP_NAME="Drupal 11"


WORKDIR /var/www/html
USER wodby
COPY --chown=wodby composer.* /var/www/html/
RUN composer install --no-dev
COPY --chown=wodby --from=themebuilder /var/www/html/wingsuit/ /var/www/html/docroot/themes/custom/wingsuit/
COPY --chown=wodby . /var/www/html
WORKDIR ${APP_ROOT}


FROM wodby/nginx:1.27-5.39.11 AS nginxbuilder
USER root
COPY --chown=root --from=drupalbuilder /var/www/html /var/www/html
