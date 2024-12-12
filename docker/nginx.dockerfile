ARG PHP_IMAGE
FROM ${PHP_IMAGE} AS php

FROM wodby/nginx:1.27-5.39.11

COPY --from=php /var/www/html /var/www/html
