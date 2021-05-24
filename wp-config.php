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
define( 'DB_NAME', 'bh65303_wp928' );

/** MySQL database username */
define( 'DB_USER', 'bh65303_wp928' );

/** MySQL database password */
define( 'DB_PASSWORD', '8.3ZS0fp2@' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

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
define( 'AUTH_KEY',         'wt648hd1zyv2dvxi41xdnmfvq4retasgw0ygdrx6fth5ybrapgfji2lfewxvhqyt' );
define( 'SECURE_AUTH_KEY',  'f2m4aomoytnrkpb7spz7qzabnhkhxptjxpnld9evzttuynpouujp5slkk6nj03zq' );
define( 'LOGGED_IN_KEY',    'v18yiz558igzpicfo15okbwozzoazznedomr4pu8t25yonn6rhdtgqjczmgbije9' );
define( 'NONCE_KEY',        'q5uy1uoafpjblzj3l6lhgrmlvcrio1z0qi22r8s7p9pjn5bgz9cyao4vftgxgazb' );
define( 'AUTH_SALT',        'rwm7enrypleze5tclsc4i4twvprqn9wmtwiozzquk1fekweiid0nm6zsmyvm3dne' );
define( 'SECURE_AUTH_SALT', '2pvrgbuqt0txv9wnrynbr6qeot30tveq54ey7fqyvy45uul3svisceqkfdyhcr5o' );
define( 'LOGGED_IN_SALT',   'xdflqcuxaocupwlb5oqja1aw7mxxy5zwfq0djetbrzhg1w97erylfi4pphr2fvhe' );
define( 'NONCE_SALT',       'tqxbgnjhtx9nru3janmskyakaj1aa7vz9mynyvwbssmtheu3jhyzmle2rtvexofj' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpuk_';

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
