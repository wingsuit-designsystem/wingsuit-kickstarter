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

## ddev Quickstart
```
fin rc -T composer create wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction
cd wingsuit-kickstarter && fin init
```
To start storybook inside ddev:
```
cd docroot/themes/custom/wingsuit
ddev yarn dev:storybook:docksal
```



### For contribution only:
#### Link `Wingsuit` to `Wingsuit Kickstarter`
Use this mode to link `https://github.com/wingsuit-designsystem/wingsuit` as volume.
