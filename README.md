<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/wsuit-logo-stacked.svg" width="340px">
</p>

# Wingsuit Kickstarter
See the [documentation](https://wingsuit-designsystem.github.io/drupal/ui_patterns/) for more details.

## Prerequisites

- [Node `^12`](https://nodejs.org)
- [YARN `^1.22`](https://classic.yarnpkg.com/)
- [PHP `^7.0.0`](https://php.net)

## Quickstart
```
composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
```
Copy `blt/example.local.blt.yml` to `blt/local.blt.yml` and adjust your database settings in your `blt/local.blt.yml` file.

After that run:
```
blt source:build:settings
blt setup
```

## DDEV Quickstart

## Docksal Quickstart
```
fin rc -T composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
cd wingsuit-kickstarter && fin init
```
To start storybook inside docksal:
```
cd docroot/themes/custom/wingsuit
fin exec yarn dev:storybook:docksal
```
and open http://storybook.wingsuit-kickstarter.docksal


### For contribution only:
#### Link `Wingsuit` to `Wingsuit Kickstarter`
Use this mode to link `https://github.com/wingsuit-designsystem/wingsuit` as volume.

   * Create a folder `wingsuit`
   * Clone "https://github.com/wingsuit-designsystem/wingsuit" and this repository inside `wingsuit`
   * Run `export DOCKSAL_ENVIRONMENT=docksal-dev`
   * Check the `WINGSUIT_PATH` in `.docksal/docksal-docksal-dev.env`
   * run `cd wingsuit-kickstarter && fin init`
