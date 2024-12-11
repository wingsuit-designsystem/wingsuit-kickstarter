ARG BASE_IMAGE_TAG

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

WORKDIR /var/www/html/docroot/themes/custom/
RUN npx @wingsuit-designsystem/cli init --branch "2.0.x"
WORKDIR /var/www/html/docroot/themes/custom/wingsuit
RUN yarn install
RUN yarn build:drupal

WORKDIR /var/www/html
