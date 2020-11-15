<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/wsuit-logo-stacked.svg" width="340px">
</p>

# Wingsuit Kickstarter

Wingsuit Kickstarter is a demo project to show how to use Wingsuit with Drupal.
The project uses Aquia blt to install Drupal.

After installation create a new node Landingpage.

Click `configure section` to see all the pattern settings for wingsuit component section.

Next click add block. All the custom blocks are mapped to patterns. Check `Manage Display` of these blocks.

If you want to make changes to the templates go to `themes/custom/storybook` and run:
* `yarn dev:storybook` to start storybook
* `yarn dev:drupal` to compile to Drupal.

## PHP kickstart
   * Clone the repository and run:
```
cd wingsuit_kickstarter
composer install
./vendor/bin/blt setup
./vendor/bin/drush cim -y
```

## Docksal kickstart

   * Clone the repository and run:
```
cd wingsuit_kickstarter && fin init
```

## Develop: Link `Wingsuit` to `Wingsuit Kickstarter`
Use this mode to link `https://github.com/wingsuit-designsystem/wingsuit` as volume.

   * Create a folder `wingsuit`
   * Clone "https://github.com/wingsuit-designsystem/wingsuit" and this repository inside `wingsuit`
   * Run `export DOCKSAL_ENVIRONMENT=docksal-dev`
   * Check the `WINGSUIT_PATH` in `.docksal/docksal-docksal-dev.env`
   * run `cd wingsuit_kickstarter && fin init`
