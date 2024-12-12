ARG BASE_IMAGE_TAG


FROM node:20-alpine AS themebuilder
WORKDIR /var/www/html/
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN ["npx", "@wingsuit-designsystem/cli", "init", "--branch", "2.0.x", "--skip-install"]
WORKDIR /var/www/html/wingsuit
RUN yarn install
RUN yarn build:drupal

FROM wodby/drupal-php:8.3-4.62.3 as drupalbuilder

ARG DRUPAL_VER

ENV DRUPAL_VER="${DRUPAL_VER}" \
    DOCROOT_SUBDIR="" \
    APP_NAME="Drupal 11"

USER root
WORKDIR /var/www/html
COPY composer.* /var/www/html/
COPY docroot /var/www/html
RUN composer install --no-dev
COPY --from=themebuilder /var/www/html/wingsuit/ /var/www/html/docroot/themes/custom/wingsuit/
COPY config/ /var/www/html/config/
COPY conf/ /var/www/html/conf/

WORKDIR /var/www/html


FROM wodby/nginx:1.27-5.39.11 AS nginxbuilder

COPY --from=drupalbuilder /var/www/html /var/www/html
