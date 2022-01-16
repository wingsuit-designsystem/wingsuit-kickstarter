<?php

/**
 * @file
 * Pipelines environment specific settings.
 */

$dir = dirname(DRUPAL_ROOT);

$config['system.file']['path']['temporary'] = '/tmp';
$settings['file_private_path'] = $dir . '/files-private';
$is_andock_env = getenv('ANDOCK');
if ($is_andock_env) {
  $config['config_split.config_split.local']['status'] = FALSE;
}


$db_name = 'default';
/**
 * Database configuration.
 */
$databases = [
  'default' =>
    [
      'default' =>
        [
          'database' => $db_name,
          'username' => 'root',
          'password' => '9Q8y+_Ckh32lk34',
          'host' => 'db',
          'port' => '3306',
          'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
          'driver' => 'mysql',
          'prefix' => '',
        ],
    ],
];

