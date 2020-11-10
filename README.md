<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/wsuit-logo-stacked.svg" width="340px">
</p>

# Wingsuit Kickstarter
Wingsuit Kickstarter is a demo project to show how to use Wingsuit with Drupal.

## PHP Kickstart
   * Clone the repository and run:
```
cd wingsuit_kickstarter
composer install
./vendor/bin/blt setup
```

## Docksal kickstart

   * Clone the repository and run:
```
cd wingsuit_kickstarter && fin init
```

## Dev Mode: Link wingsuit to wingsuit_kickstarter
Use this mode to link `https://github.com/wingsuit-designsystem/wingsuit` as volume.

   * Create a folder `wingsuit`
   * Clone "https://github.com/wingsuit-designsystem/wingsuit" and this repository inside `wingsuit`
   * Run `export DOCKSAL_ENVIRONMENT=docksal-dev`
   * Check the `WINGSUIT_PATH` in `.docksal/docksal-docksal-dev.env`
   * run `cd wingsuit_kickstarter && fin init`
