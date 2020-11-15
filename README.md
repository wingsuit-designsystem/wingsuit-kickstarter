<p align="center">
<img src="https://github.com/wingsuit-designsystem/wingsuit/raw/master/images/wsuit-logo-stacked.svg" width="340px">
</p>

# Wingsuit Kickstarter
See the [documentation](https://wingsuit-designsystem.github.io/drupal/ui_patterns/) for more details.

## Prerequisites

- [Node `^8`, `^10`](https://nodejs.org)
- [YARN `^1.22`](https://classic.yarnpkg.com/)
- [PHP `^7.0.0`](https://php.net)

## Quickstart
```
composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
cd wingsuit-kickstarter && ./vendor/bin/blt setup
```

## Docksal Quickstart
```
fin rc -T composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
cd wingsuit_kickstarter && fin init
```

## Develop with Docksal: Link `Wingsuit` to `Wingsuit Kickstarter`
Use this mode to link `https://github.com/wingsuit-designsystem/wingsuit` as volume.

   * Create a folder `wingsuit`
   * Clone "https://github.com/wingsuit-designsystem/wingsuit" and this repository inside `wingsuit`
   * Run `export DOCKSAL_ENVIRONMENT=docksal-dev`
   * Check the `WINGSUIT_PATH` in `.docksal/docksal-docksal-dev.env`
   * run `cd wingsuit_kickstarter && fin init`
