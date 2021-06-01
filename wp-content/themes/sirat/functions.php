<?php
/**
 * Sirat functions and definitions
 *
 * @package Sirat
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */

/* Theme Setup */
if ( ! function_exists( 'sirat_setup' ) ) :
 
function sirat_setup() {

	$GLOBALS['content_width'] = apply_filters( 'sirat_content_width', 640 );
	
	load_theme_textdomain( 'sirat', get_template_directory() . '/languages' );
	add_theme_support( 'automatic-feed-links' );
	add_theme_support( 'woocommerce' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'custom-logo', array(
		'height'      => 240,
		'width'       => 240,
		'flex-height' => true,
	) );
	add_image_size('sirat-homepage-thumb',240,145,true);
	
    register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'sirat' ),
	) );

	add_theme_support( 'custom-background', array(
		'default-color' => 'ffffff'
	) );

	//selective refresh for sidebar and widgets
	add_theme_support( 'customize-selective-refresh-widgets' );

	/*
	 * Enable support for Post Formats.
	 *
	 * See: https://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array('image','video','gallery','audio',) );

	/*
	 * This theme styles the visual editor to resemble the theme style,
	 * specifically font, colors, icons, and column width.
	 */
	add_editor_style( array( 'css/editor-style.css', sirat_font_url() ) );
}
endif;

add_action( 'after_setup_theme', 'sirat_setup' );

/* Theme Widgets Setup */
function sirat_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Blog Sidebar', 'sirat' ),
		'description'   => __( 'Appears on blog page sidebar', 'sirat' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
	
	register_sidebar( array(
		'name'          => __( 'Page Sidebar', 'sirat' ),
		'description'   => __( 'Appears on page sidebar', 'sirat' ),
		'id'            => 'sidebar-2',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Sidebar 3', 'sirat' ),
		'description'   => __( 'Appears on page sidebar', 'sirat' ),
		'id'            => 'sidebar-3',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Navigation 1', 'sirat' ),
		'description'   => __( 'Appears on footer 1', 'sirat' ),
		'id'            => 'footer-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Navigation 2', 'sirat' ),
		'description'   => __( 'Appears on footer 2', 'sirat' ),
		'id'            => 'footer-2',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Navigation 3', 'sirat' ),
		'description'   => __( 'Appears on footer 3', 'sirat' ),
		'id'            => 'footer-3',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Footer Navigation 4', 'sirat' ),
		'description'   => __( 'Appears on footer 4', 'sirat' ),
		'id'            => 'footer-4',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Top Bar Social Media', 'sirat' ),
		'description'   => __( 'Appears on top bar', 'sirat' ),
		'id'            => 'social-links',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Shop Page Sidebar', 'sirat' ),
		'description'   => __( 'Appears on shop page', 'sirat' ),
		'id'            => 'woocommerce-shop-sidebar',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );

	register_sidebar( array(
		'name'          => __( 'Single Product Sidebar', 'sirat' ),
		'description'   => __( 'Appears on shop page', 'sirat' ),
		'id'            => 'woocommerce-single-sidebar',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h3 class="widget-title">',
		'after_title'   => '</h3>',
	) );
}
add_action( 'widgets_init', 'sirat_widgets_init' );

/* Theme Font URL */
function sirat_font_url() {
	$font_url      = '';
	$font_family   = array();
	$font_family[] = 'ZCOOL XiaoWei';
	$font_family[] = 'Heebo:100,300,400,500,700,800,900';
	$font_family[] = 'Saira:100,200,300,400,500,600,700,800,900';
	$font_family[] = 'Krub:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i';
	$font_family[] = 'PT Sans:300,400,600,700,800,900';
	$font_family[] = 'Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i';
	$font_family[] = 'Roboto Condensed:400,700';
	$font_family[] = 'Open Sans:300,300i,400,400i,600,600i,700,700i,800,800i';
	$font_family[] = 'Overpass';
	$font_family[] = 'Staatliches';
	$font_family[] = 'Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i';
	$font_family[] = 'Playball:300,400,600,700,800,900';
	$font_family[] = 'Alegreya:300,400,600,700,800,900';
	$font_family[] = 'Julius Sans One';
	$font_family[] = 'Arsenal';
	$font_family[] = 'Slabo';
	$font_family[] = 'Lato';
	$font_family[] = 'Overpass Mono';
	$font_family[] = 'Source Sans Pro';
	$font_family[] = 'Raleway';
	$font_family[] = 'Merriweather';
	$font_family[] = 'Droid Sans';
	$font_family[] = 'Rubik';
	$font_family[] = 'Lora';
	$font_family[] = 'Ubuntu';
	$font_family[] = 'Cabin';
	$font_family[] = 'Arimo';
	$font_family[] = 'Playfair Display';
	$font_family[] = 'Quicksand';
	$font_family[] = 'Padauk';
	$font_family[] = 'Muli';
	$font_family[] = 'Inconsolata';
	$font_family[] = 'Bitter';
	$font_family[] = 'Pacifico';
	$font_family[] = 'Indie Flower';
	$font_family[] = 'VT323';
	$font_family[] = 'Dosis';
	$font_family[] = 'Frank Ruhl Libre';
	$font_family[] = 'Fjalla One';
	$font_family[] = 'Oxygen:300,400,700';
	$font_family[] = 'Arvo';
	$font_family[] = 'Noto Serif';
	$font_family[] = 'Lobster';
	$font_family[] = 'Crimson Text';
	$font_family[] = 'Yanone Kaffeesatz';
	$font_family[] = 'Anton';
	$font_family[] = 'Libre Baskerville';
	$font_family[] = 'Bree Serif';
	$font_family[] = 'Gloria Hallelujah';
	$font_family[] = 'Josefin Sans';
	$font_family[] = 'Abril Fatface';
	$font_family[] = 'Varela Round';
	$font_family[] = 'Vampiro One';
	$font_family[] = 'Shadows Into Light';
	$font_family[] = 'Cuprum';
	$font_family[] = 'Rokkitt';
	$font_family[] = 'Vollkorn';
	$font_family[] = 'Francois One';
	$font_family[] = 'Orbitron';
	$font_family[] = 'Patua One';
	$font_family[] = 'Acme';
	$font_family[] = 'Satisfy';
	$font_family[] = 'Josefin Slab';
	$font_family[] = 'Quattrocento Sans';
	$font_family[] = 'Architects Daughter';
	$font_family[] = 'Russo One';
	$font_family[] = 'Monda';
	$font_family[] = 'Righteous';
	$font_family[] = 'Lobster Two';
	$font_family[] = 'Hammersmith One';
	$font_family[] = 'Courgette';
	$font_family[] = 'Permanent Marker';
	$font_family[] = 'Cherry Swash';
	$font_family[] = 'Cormorant Garamond';
	$font_family[] = 'Poiret One';
	$font_family[] = 'BenchNine';
	$font_family[] = 'Economica';
	$font_family[] = 'Handlee';
	$font_family[] = 'Cardo';
	$font_family[] = 'Alfa Slab One';
	$font_family[] = 'Averia Serif Libre';
	$font_family[] = 'Cookie';
	$font_family[] = 'Chewy';
	$font_family[] = 'Great Vibes';
	$font_family[] = 'Coming Soon';
	$font_family[] = 'Philosopher';
	$font_family[] = 'Days One';
	$font_family[] = 'Kanit';
	$font_family[] = 'Shrikhand';
	$font_family[] = 'Tangerine';
	$font_family[] = 'IM Fell English SC';
	$font_family[] = 'Boogaloo';
	$font_family[] = 'Bangers';
	$font_family[] = 'Fredoka One';
	$font_family[] = 'Bad Script';
	$font_family[] = 'Volkhov';
	$font_family[] = 'Shadows Into Light Two';
	$font_family[] = 'Marck Script';
	$font_family[] = 'Sacramento';
	$font_family[] = 'Unica One';		
	$query_args = array(
		'family'	=> rawurlencode(implode('|',$font_family)),
	);
	$font_url = add_query_arg($query_args,'//fonts.googleapis.com/css');
	return $font_url;
}

/* Theme enqueue scripts */
function sirat_scripts() {	
	wp_enqueue_style( 'sirat-font', sirat_font_url(), array() );
	wp_enqueue_style( 'bootstrap', get_template_directory_uri().'/assets/css/bootstrap.css' );
	wp_enqueue_style( 'sirat-basic-style', get_stylesheet_uri() );
	/* Inline style sheet */
	require get_parent_theme_file_path( '/inline-style.php' );
	wp_add_inline_style( 'sirat-basic-style',$custom_css );
	wp_enqueue_style( 'font-awesome', get_template_directory_uri().'/assets/css/fontawesome-all.css' );	
	wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.js', array('jquery') ,'',true);
	wp_enqueue_script( 'jquery-superfish', get_template_directory_uri() . '/assets/js/jquery.superfish.js', array('jquery') ,'',true);
	wp_enqueue_script( 'sirat-custom-scripts-jquery', get_template_directory_uri() . '/assets/js/custom.js', array('jquery') );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

	/* Enqueue the Dashicons script */
	wp_enqueue_style( 'dashicons' );
}
add_action( 'wp_enqueue_scripts', 'sirat_scripts' );

function sirat_ie_stylesheet(){
	wp_enqueue_style('sirat-ie', get_template_directory_uri().'/css/ie.css');
	wp_style_add_data( 'sirat-ie', 'conditional', 'IE' );
}
add_action('wp_enqueue_scripts','sirat_ie_stylesheet');

function sirat_sanitize_dropdown_pages( $page_id, $setting ) {
  	// Ensure $input is an absolute integer.
  	$page_id = absint( $page_id );
  	// If $page_id is an ID of a published page, return it; otherwise, return the default.
  	return ( 'publish' == get_post_status( $page_id ) ? $page_id : $setting->default );
}

/*radio button sanitization*/
function sirat_sanitize_choices( $input, $setting ) {
    global $wp_customize; 
    $control = $wp_customize->get_control( $setting->id ); 
    if ( array_key_exists( $input, $control->choices ) ) {
        return $input;
    } else {
        return $setting->default;
    }
}

/* Excerpt Limit Begin */
function sirat_string_limit_words($string, $word_limit) {
	$words = explode(' ', $string, ($word_limit + 1));
	if(count($words) > $word_limit)
	array_pop($words);
	return implode(' ', $words);
}

define('SIRAT_CREDIT',__('https://www.vwthemes.com/themes/free-multipurpose-wordpress-theme/','sirat'));
if ( ! function_exists( 'sirat_credit' ) ) {
	function sirat_credit(){
		echo "<a href=".esc_url(SIRAT_CREDIT).">".esc_html__('Sirat WordPress Theme','sirat')."</a>";
	}
}

// Change number or products per row to 3
add_filter('loop_shop_columns', 'sirat_loop_columns');
	if (!function_exists('sirat_loop_columns')) {
	function sirat_loop_columns() {
		return get_theme_mod( 'sirat_products_per_row', '3' ); 
		// 3 products per row
	}
}

//Change number of products that are displayed per page (shop page)
add_filter( 'loop_shop_per_page', 'sirat_products_per_page' );
function sirat_products_per_page( $cols ) {
  	return  get_theme_mod( 'sirat_products_per_page',9);
}

//Active Callback
function sirat_slider_slideshow(){
	if(get_theme_mod('sirat_slider_background_options') == 'Slideshow' ) {
		return true;
	}
	return false;
}

function sirat_slider_image(){
	if(get_theme_mod('sirat_slider_background_options') == 'Image' || get_theme_mod('sirat_slider_background_options') == 'Gradient' ) {
		return true;
	}
	return false;
}

function sirat_slider_gradient(){
	if(get_theme_mod('sirat_slider_background_options') == 'Gradient' ) {
		return true;
	}
	return false;
}

function sirat_slider_video(){
	if(get_theme_mod('sirat_slider_background_options') == 'Video' ) {
		return true;
	}
	return false;
}

function sirat_slider_hide_show_title(){
	if(get_theme_mod('sirat_slider_background_options') == 'Slideshow' ) {
		return true;
	}
	return false;
}

function sirat_slider_hide_show_content(){
	if(get_theme_mod('sirat_slider_background_options') == 'Slideshow' ) {
		return true;
	}
	return false;
}

function sirat_slider_hide_show_button(){
	if(get_theme_mod('sirat_slider_background_options') == 'Slideshow' ) {
		return true;
	}
	return false;
}

function sirat_slider_hide_show_button_text(){
	if(get_theme_mod('sirat_slider_background_options') == 'Image' || get_theme_mod('sirat_slider_background_options') == 'Gradient' || get_theme_mod('sirat_slider_background_options') == 'Slideshow' ) {
		return true;
	}
	return false;
}

/* Implement the Custom Header feature. */
require get_template_directory() . '/inc/custom-header.php';

/* Custom template tags for this theme. */
require get_template_directory() . '/inc/template-tags.php';

/* Customizer additions. */
require get_template_directory() . '/inc/customizer.php';

/* Customizer additions. */
require get_template_directory() . '/inc/themes-widgets/social-icon.php';

/* Customizer additions. */
require get_template_directory() . '/inc/themes-widgets/about-us-widget.php';

/* Customizer additions. */
require get_template_directory() . '/inc/themes-widgets/contact-us-widget.php';

/* Typography */
require get_template_directory() . '/inc/typography/ctypo.php';




add_action( 'woocommerce_single_product_summary', 'woocommerce_total_product_price', 31 );
function woocommerce_total_product_price() {
    global $woocommerce, $product;
    // let's setup our divs
    echo sprintf('<div id="product_total_price" style="margin-bottom:20px;display:none">%s %s</div>',__('Total:','woocommerce'),'<span class="price">'.$product->get_price().'</span>');
    echo sprintf('<div id="cart_total_price" style="margin-bottom:20px;display:none">%s %s</div>',__('Cart total:','woocommerce'),'<span class="price">'.$product->get_price().'</span>');
    ?>
        <script>
            jQuery(function($){
                var price = <?php echo $product->get_price(); ?>,
                    current_cart_total = <?php echo $woocommerce->cart->cart_contents_total; ?>,
                    currency = '<?php echo get_woocommerce_currency_symbol(); ?>';

                $('[name=quantity]').change(function(){
                    if (!(this.value < 0.001)) {
                        var product_total = parseFloat(price * this.value),
                        cart_total = parseFloat(product_total + current_cart_total);

                        $('#product_total_price .price').html( product_total.toFixed(2) +currency);
                        $('#cart_total_price .price').html( cart_total.toFixed(2) +currency);
                    }
                    $('#product_total_price,#cart_total_price').toggle(!(this.value <= 0.001));

                });
            });
        </script>
    <?php
}





add_filter('woocommerce_quantity_input_min', 'min_decimal');
function min_decimal($val) {
    return 0.001;
}
 

add_filter('woocommerce_quantity_input_step', 'nsk_allow_decimal');
function nsk_allow_decimal($val) {
    return 0.001;
}
 
// Removes the WooCommerce filter, that is validating the quantity to be an int
remove_filter('woocommerce_stock_amount', 'intval');
 
// Add a filter, that validates the quantity to be a float
add_filter('woocommerce_stock_amount', 'floatval');
 
// Add unit price fix when showing the unit price on processed orders
add_filter('woocommerce_order_amount_item_total', 'unit_price_fix', 10, 5);
function unit_price_fix($price, $order, $item, $inc_tax = false, $round = true) {
    $qty = (!empty($item['qty']) && $item['qty'] != 0) ? $item['qty'] : 0.001;
    if($inc_tax) {
        $price = ($item['line_total'] + $item['line_tax']) / $qty;
    } else {
        $price = $item['line_total'] / $qty;
    }
    $price = $round ? round( $price, 2 ) : $price;
    return $price;
}

/**
 * Adjust the quantity input values
 */
add_filter( 'woocommerce_quantity_input_args', 'jk_woocommerce_quantity_input_args', 10, 2 ); // Simple products

function jk_woocommerce_quantity_input_args( $args, $product ) {
	if ( is_singular( 'product' ) ) {
		$args['input_value'] 	= 0.001;	// Starting value (we only want to affect product pages, not cart)
	}
	
	$args['min_value'] 	= 0.001;   	// Minimum value
	$args['step'] 		= 0.001;    // Quantity steps
	return $args;
}

add_filter( 'woocommerce_available_variation', 'jk_woocommerce_available_variation' ); // Variations

function jk_woocommerce_available_variation( $args ) {
	$args['max_qty'] = 80; 		// Maximum value (variations)
	$args['min_qty'] = 2;   	// Minimum value (variations)
	return $args;
}

/* Add to cart */
// add_filter( 'woocommerce_product_single_add_to_cart_text', 'tb_woo_custom_cart_button_text' );
// add_filter( 'woocommerce_product_add_to_cart_text', 'tb_woo_custom_cart_button_text' );   
// function tb_woo_custom_cart_button_text() {
//         return __( 'Buy Bitcoin', 'woocommerce' );
// }

function my_woocommerce_get_price($price, $product) {
	global $wpdb;
	$prod = json_decode($product, true);
	$cur  = $prod['name'];
	$real_price = $wpdb->get_var("SELECT price FROM {$wpdb->prefix}cmc_coins WHERE name = '$cur' LIMIT 1");
	return $real_price / 100 * 107;
}
add_filter('woocommerce_get_price', 'my_woocommerce_get_price', 100, 2);


pll_register_string('Логотип', 'logo-image');
pll_register_string('Иконка WhatsApp', 'wa-image');
pll_register_string('Call us', 'call-us');
pll_register_string('Address', 'address');
pll_register_string('Working hours', 'working-hours');
pll_register_string('Working time', 'working-time');