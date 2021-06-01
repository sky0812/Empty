<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', "bh65303_bitcoin" );

/** MySQL database username */
define( 'DB_USER', "bh65303_bitcoin" );

/** MySQL database password */
define( 'DB_PASSWORD', "0o^;zqlw++\$h" );

/** MySQL hostname */
define( 'DB_HOST', "localhost" );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'se7j0sdj1uc1jwvcmdesbxcvvduczxfi71ikgx9uesdp8rr3tszz022vme9wwzfy' );
define( 'SECURE_AUTH_KEY',  'eb3zzwzuxorszd0kyypily8jmdvow3w2parpt3gklzupl0nsdwklbu4irfnjct1g' );
define( 'LOGGED_IN_KEY',    'dvnygeqxsuxr4x02fzpaa4qrra2dnzh6t2dgfmowksqikbdgco8syqhpmbpbsl2t' );
define( 'NONCE_KEY',        'nbtyh8pwhdrn1ln6nuagawe1w2tiqhrqtepicihs4imwfncprdpgjt0u0agibdjo' );
define( 'AUTH_SALT',        'kqdodobl2tcktyymcgt7awg8xnriq2uhwps9wdd9qsqhcanvbnxf8jdoydfpkp3m' );
define( 'SECURE_AUTH_SALT', 'gjlbgf94tv7n72tnvagvfw6mydpvjztbduugnwtgufhwwmxkbmz1e35ecije7dtu' );
define( 'LOGGED_IN_SALT',   'yq249g4edplymybgqpsa9vncvzlov1vrm922d5jpzw0aqb2ji2zkpmeyt9ectppb' );
define( 'NONCE_SALT',       'c9albohzejhtpo2vdmkrdf3ybnwu8sdhjd7i6nqzo6dkh6w2kjjqrtipnaawxqwf' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp2g_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
