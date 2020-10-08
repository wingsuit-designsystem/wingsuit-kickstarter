# Wingsuit Kickstart
Wingsuit Kickstart is a demo project to show how to use Wingsuit with Drupal.

## Installation instruction

   * Clone the repository
   * Go to `docroot/themes/custom` and install the latest Wingsuit:
```
    npx @wingsuit-designsystem/cli init
```
   * Build drupal templates
```
    cd wingsuit
    yarn build:drupal
```
* Install drupal
```
    drush si lightning --existing-config
```
