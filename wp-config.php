<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
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
define( 'DB_NAME', 'bh65303_2md' );

/** MySQL database username */
define( 'DB_USER', 'bh65303_2md' );

/** MySQL database password */
define( 'DB_PASSWORD', '4pFA37][S3' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'qyqrkb9ph6skskwyzaodu2wvticehfdlj7ikdphljwjolwvm3xmxvf3fdtuo5xay' );
define( 'SECURE_AUTH_KEY',  'dxrxx6zjvtvkgd1wjtqmxgufppjzsooivzkloyrqsgp4shuutoyllxtritkbn41q' );
define( 'LOGGED_IN_KEY',    'jafo7g3jlroifnlfsiuyralejfhgs9gknahvfj2agj6zaslmhpqtpgyomu4nmsx0' );
define( 'NONCE_KEY',        '5ipb6sxpacdefpueu9tyuby36vw1ihkuvxtkgh7sfga65swofe6kimbhtxpbmlok' );
define( 'AUTH_SALT',        'aceqcxvy2dnd8izpxbhwm2i4sv797zhveqgqqewfipqcsjjw0vrt6noe27anx3qn' );
define( 'SECURE_AUTH_SALT', '5rmzfdeyw4r1meq0v2s3dt5llimfibsjews2ao13oyj1qujw9fmjrrpmpjyqbsqz' );
define( 'LOGGED_IN_SALT',   'cmc3msj1j05c2k9wzcyr49l746bzxrokwibb41lbuoco2i9oi1czm8gysyf5gmwc' );
define( 'NONCE_SALT',       'imeaqv0ifn93if2gochdjq8aaokfqnhnrc862bbhanho51ybk1oo5gzsapftdcyg' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpl2_';

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

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
