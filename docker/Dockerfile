ARG BASE_IMAGE_TAG


FROM node:20-alpine as themeBuilder
WORKDIR /var/www/html/
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

RUN ["npx", "@wingsuit-designsystem/cli", "init", "--branch", "2.0.x", "--skip-install"]
RUN yarn install
RUN yarn build:drupal

FROM wodby/drupal-php:8.3-4.62.3

ARG DRUPAL_VER

ENV DRUPAL_VER="${DRUPAL_VER}" \
    DOCROOT_SUBDIR="web" \
    APP_NAME="Drupal 11"

USER root
WORKDIR /var/www/html
COPY composer.* /var/www/html/
COPY docroot /var/www/html
RUN composer install --no-dev
COPY --from=themeBuilder /var/www/html/wingsuit/ /var/www/html/docroot/themes/custom/wingsuit/
WORKDIR /var/www/html
