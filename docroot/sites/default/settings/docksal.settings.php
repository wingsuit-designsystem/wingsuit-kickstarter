<?php

/**
 * @file
 * Pipelines environment specific settings.
 */

$dir = dirname(DRUPAL_ROOT);

$config['system.file']['path']['temporary'] = '/tmp';
$settings['file_private_path'] = $dir . '/files-private';

$databases = array(
  'default' => array(
    'default' => array(
      'database' => 'default',
      'username' => 'user',
      'password' => '9Q8y+_CKolk34',
      'host' => 'db',
      'port' => '3306',
      'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
      'driver' => 'mysql',
      'prefix' => '',
    ),
  ),
);
