<?php

	$sirat_first_color = get_theme_mod('sirat_first_color');
	$custom_css = '';
	/*---------------- Global First Color -----------*/
	if($sirat_first_color != false){
		$custom_css .='.top-bar, input[type="submit"],.top-btn a,.more-btn a,#sidebar h3,#footer-2,.pagination .current,.pagination a:hover, #comments input[type="submit"],#sidebar .custom-social-icons i, #footer .custom-social-icons i,#sidebar .tagcloud a:hover,.serv-box:hover,.box .inner-content:after, #slider .carousel-control-prev-icon:hover, #slider .carousel-control-next-icon:hover,#header main-menu-navigation ul.sub-menu li a:hover,#footer .tagcloud a:hover,nav.woocommerce-MyAccount-navigation ul li,.woocommerce #respond input#submit, .woocommerce a.button, .woocommerce button.button, .woocommerce input.button, .woocommerce #respond input#submit.alt, .woocommerce a.button.alt, .woocommerce button.button.alt, .woocommerce input.button.alt, .main-menu-navigation .current_page_item > a, .main-menu-navigation .current-menu-item > a, .main-menu-navigation .current_page_ancestor > a, #footer input[type="submit"]:hover, #comments a.comment-reply-link, #comments input[type="submit"].submit, #sidebar .widget_price_filter .ui-slider .ui-slider-range, #sidebar .widget_price_filter .ui-slider .ui-slider-handle, #sidebar .woocommerce-product-search button, #footer .widget_price_filter .ui-slider .ui-slider-range, #footer .widget_price_filter .ui-slider .ui-slider-handle, #footer .woocommerce-product-search button, .nav-previous a:hover, .nav-next a:hover, #footer a.custom_read_more, #sidebar a.custom_read_more{';
			$custom_css .='background-color: '.esc_html($sirat_first_color).';';
		$custom_css .='}';
	}
	if($sirat_first_color != false){
		$custom_css .='.scrollup, #slider .carousel-control-prev-icon:hover, #slider .carousel-control-next-icon:hover, #comments input[type="submit"].submit{';
			$custom_css .='border-color: '.esc_html($sirat_first_color).';';
		$custom_css .='}';
	}
	if($sirat_first_color != false){
		$custom_css .='a, .post-navigation a:hover .post-title, .post-navigation a:focus .post-title,#header main-menu-navigation ul li a:hover,.post-main-box:hover h3,.scrollup,#footer h3,.serv-box a,#footer li a:hover,a.scrollup, #footer .custom-social-icons i:hover, #sidebar ul li a:hover, .main-menu-navigation a:hover, .main-menu-navigation ul.sub-menu a:hover, .post-info a:hover, .post-main-box h1 a:hover, .post-main-box h2 a:hover, #footer a.custom_read_more:hover{';
			$custom_css .='color: '.esc_html($sirat_first_color).';';
		$custom_css .='}';
	}
	if($sirat_first_color != false){
		$custom_css .='.main-menu-navigation ul ul{';
			$custom_css .='border-top-color: '.esc_html($sirat_first_color).';';
		$custom_css .='}';
	}
	if($sirat_first_color != false){
		$custom_css .='#footer h3:after,#slider,.middle-header, .main-menu-navigation ul ul{';
			$custom_css .='border-bottom-color: '.esc_html($sirat_first_color).';';
		$custom_css .='}';
	}
	if($sirat_first_color != false){
		$custom_css .='#slider .inner_carousel, .heading-box h2{';
			$custom_css .='border-left-color: '.esc_html($sirat_first_color).';';
		$custom_css .='}';
	}
	if($sirat_first_color != false){
		$custom_css .='.main-menu-navigation ul ul{
		box-shadow: 0 0px 3px '.esc_html($sirat_first_color).';
		}';
	}
	/*---------------------------Width Layout -------------------*/

	$theme_lay = get_theme_mod( 'sirat_width_option','Full Width');
    if($theme_lay == 'Boxed'){
		$custom_css .='body{';
			$custom_css .='max-width: 1140px; width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto;';
		$custom_css .='}';
	}else if($theme_lay == 'Wide Width'){
		$custom_css .='body{';
			$custom_css .='width: 100%;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto;';
		$custom_css .='}';
	}else if($theme_lay == 'Full Width'){
		$custom_css .='body{';
			$custom_css .='max-width: 100%;';
		$custom_css .='}';
	}

	/*--------------------------- Slider Opacity -------------------*/

	$theme_lay = get_theme_mod( 'sirat_slider_opacity_color','0.5');
	if($theme_lay == '0'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0';
		$custom_css .='}';
		}else if($theme_lay == '0.1'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.1';
		$custom_css .='}';
		}else if($theme_lay == '0.2'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.2';
		$custom_css .='}';
		}else if($theme_lay == '0.3'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.3';
		$custom_css .='}';
		}else if($theme_lay == '0.4'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.4';
		$custom_css .='}';
		}else if($theme_lay == '0.5'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.5';
		$custom_css .='}';
		}else if($theme_lay == '0.6'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.6';
		$custom_css .='}';
		}else if($theme_lay == '0.7'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.7';
		$custom_css .='}';
		}else if($theme_lay == '0.8'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.8';
		$custom_css .='}';
		}else if($theme_lay == '0.9'){
		$custom_css .='#slider img{';
			$custom_css .='opacity:0.9';
		$custom_css .='}';
		}

	/*---------------------------Slider Content Layout -------------------*/

	$theme_lay = get_theme_mod( 'sirat_slider_content_option','Left');
    if($theme_lay == 'Left'){
		$custom_css .='#slider .carousel-caption, #slider .inner_carousel, #slider .inner_carousel h1{';
			$custom_css .='text-align:left; left:15%; right:45%;';
		$custom_css .='}';
	}else if($theme_lay == 'Center'){
		$custom_css .='#slider .carousel-caption, #slider .inner_carousel, #slider .inner_carousel h1{';
			$custom_css .='text-align:center; left:20%; right:20%;';
		$custom_css .='}';
		$custom_css .='#slider .inner_carousel{';
			$custom_css .='border-left:none;';
		$custom_css .='}';
	}else if($theme_lay == 'Right'){
		$custom_css .='#slider .carousel-caption, #slider .inner_carousel, #slider .inner_carousel h1{';
			$custom_css .='text-align:right; left:45%; right:15%;';
		$custom_css .='}';
		$custom_css .='#slider .inner_carousel{';
			$custom_css .='border-right:solid 4px #febe00; border-left:none; padding-right: 20px;';
		$custom_css .='}';
	}

	/*---------------------------Slider Gradient Background ------------*/

	$slider_bg = get_theme_mod( 'sirat_slider_background','#febe00');
	if($slider_bg != false){
		$custom_css .='.slider-page-image{
		background-color: '.esc_html($slider_bg).';
		}';
	}

	/*---------------------------Header Layout -------------------*/

	$theme_lay = get_theme_mod( 'sirat_header_content_option','Left');
    if($theme_lay == 'Left'){
		$custom_css .='#header main-menu-navigation ul{';
			$custom_css .='text-align:right;';
		$custom_css .='}';
		$custom_css .='.logo{';
			$custom_css .='border-bottom:none;';
		$custom_css .='}';
	}else if($theme_lay == 'Center'){
		$custom_css .='#header main-menu-navigation ul{';
			$custom_css .='text-align:center;';
		$custom_css .='}';
		$custom_css .='.logo{';
			$custom_css .='padding:15px 0; border-bottom: 1px solid #e1e1e1; text-align: center;';
		$custom_css .='}';
		$custom_css .='.middle-header{';
			$custom_css .='padding: 0;';
		$custom_css .='}';
	}else if($theme_lay == 'Right'){
		$custom_css .='#header main-menu-navigation ul{';
			$custom_css .='text-align:left;';
		$custom_css .='}';
		$custom_css .='.logo{';
			$custom_css .='border-bottom:none;';
		$custom_css .='}';
	}

	/*---------------------------Blog Layout -------------------*/

	$theme_lay = get_theme_mod( 'sirat_blog_layout_option','Default');
    if($theme_lay == 'Default'){
		$custom_css .='.post-main-box{';
			$custom_css .='';
		$custom_css .='}';
	}else if($theme_lay == 'Center'){
		$custom_css .='.post-main-box, .post-main-box h2, .new-text p{';
			$custom_css .='text-align:center;';
		$custom_css .='}';
		$custom_css .='.post-info{';
			$custom_css .='margin-top: 10px;';
		$custom_css .='}';
		$custom_css .='.sticky .post-main-box h2{';
			$custom_css .='display: unset;';
		$custom_css .='}';
	}else if($theme_lay == 'Left'){
		$custom_css .='.post-main-box, .post-main-box h2, .new-text p{';
			$custom_css .='text-align:Left;';
		$custom_css .='}';
		$custom_css .='.post-info{';
			$custom_css .='margin-top: 10px;';
		$custom_css .='}';
		$custom_css .='.post-main-box h2{';
			$custom_css .='margin-top: 10px;';
		$custom_css .='}';
	}

	/*------------- Top Bar Settings ------------------*/

	$sirat_topbar_padding_top_bottom = get_theme_mod('sirat_topbar_padding_top_bottom');
	if($sirat_topbar_padding_top_bottom != false){
		$custom_css .='.top-bar{';
			$custom_css .='padding-top: '.esc_html($sirat_topbar_padding_top_bottom).'; padding-bottom: '.esc_html($sirat_topbar_padding_top_bottom).';';
		$custom_css .='}';
	}

	/*---------------------------Slider Height ------------*/

	$sirat_slider_height = get_theme_mod('sirat_slider_height');
	if($sirat_slider_height != false){
		$custom_css .='#slider img, #slider .slider-image img, #slider .slider-page-image{';
			$custom_css .='height: '.esc_html($sirat_slider_height).';';
		$custom_css .='}';
	}

	/*------------- Slider Content Padding Settings ------------------*/

	$sirat_slider_content_padding_top_bottom = get_theme_mod('sirat_slider_content_padding_top_bottom');
	$sirat_slider_content_padding_left_right = get_theme_mod('sirat_slider_content_padding_left_right');
	if($sirat_slider_content_padding_top_bottom != false || $sirat_slider_content_padding_left_right != false){
		$custom_css .='#slider .carousel-caption{';
			$custom_css .='top: '.esc_html($sirat_slider_content_padding_top_bottom).'; bottom: '.esc_html($sirat_slider_content_padding_top_bottom).';left: '.esc_html($sirat_slider_content_padding_left_right).';right: '.esc_html($sirat_slider_content_padding_left_right).';';
		$custom_css .='}';
	}

	/*---------------------- Slider ------------------------*/

	$slider_layout = get_theme_mod( 'sirat_slider_arrows',false);
	if($slider_layout == true){
		$custom_css .='.customize-partial-edit-shortcuts-shown .slider-refresh{';
			$custom_css .='display: none;';
		$custom_css .='}';
	}

	/*------------------- Services Section --------------------*/
	
	$services_title = get_theme_mod( 'sirat_section_title','');
	if( $services_title == true  ){
		$custom_css .='.customize-partial-edit-shortcuts-shown .services-refresh{';
			$custom_css .='display: none;';
		$custom_css .='}';
	}

	/*------------------ Search Settings -----------------*/
	
	$sirat_search_padding_top_bottom = get_theme_mod('sirat_search_padding_top_bottom');
	$sirat_search_padding_left_right = get_theme_mod('sirat_search_padding_left_right');
	$sirat_search_font_size = get_theme_mod('sirat_search_font_size');
	$sirat_search_border_radius = get_theme_mod('sirat_search_border_radius');
	if($sirat_search_padding_top_bottom != false || $sirat_search_padding_left_right != false || $sirat_search_font_size != false || $sirat_search_border_radius != false){
		$custom_css .='.search-box i{';
			$custom_css .='padding-top: '.esc_html($sirat_search_padding_top_bottom).'; padding-bottom: '.esc_html($sirat_search_padding_top_bottom).';padding-left: '.esc_html($sirat_search_padding_left_right).';padding-right: '.esc_html($sirat_search_padding_left_right).';font-size: '.esc_html($sirat_search_font_size).';border-radius: '.esc_html($sirat_search_border_radius).'px;';
		$custom_css .='}';
	}

	/*------------- Navigation Menus Settings ------------------*/

	$sirat_navigation_menu_font_size = get_theme_mod('sirat_navigation_menu_font_size');
	if($sirat_navigation_menu_font_size != false){
		$custom_css .='.main-menu-navigation a{';
			$custom_css .='font-size: '.esc_html($sirat_navigation_menu_font_size).';';
		$custom_css .='}';
	}

	$menu_text = get_theme_mod( 'sirat_navigation_menu_text_transform','Default');
	if($menu_text == 'Default'){
		$custom_css .='.main-menu-navigation a{';
			$custom_css .='';
		$custom_css .='}';
	}else if($menu_text == 'Uppercase'){
		$custom_css .='.main-menu-navigation a{';
				$custom_css .='text-transform:uppercase;';
			$custom_css .='}';
	}

	/*-------------- Sticky Header Padding ----------------*/

	$sirat_sticky_header_padding = get_theme_mod('sirat_sticky_header_padding');
	if($sirat_sticky_header_padding != false){
		$custom_css .='.header-fixed{';
			$custom_css .='padding: '.esc_html($sirat_sticky_header_padding).'!important;';
		$custom_css .='}';
	}

	/*---------------- Button Settings ------------------*/

	$sirat_button_padding_top_bottom = get_theme_mod('sirat_button_padding_top_bottom');
	$sirat_button_padding_left_right = get_theme_mod('sirat_button_padding_left_right');
	if($sirat_button_padding_top_bottom != false || $sirat_button_padding_left_right != false){
		$custom_css .='.post-main-box .more-btn a{';
			$custom_css .='padding-top: '.esc_html($sirat_button_padding_top_bottom).'; padding-bottom: '.esc_html($sirat_button_padding_top_bottom).';padding-left: '.esc_html($sirat_button_padding_left_right).';padding-right: '.esc_html($sirat_button_padding_left_right).';';
		$custom_css .='}';
	}

	$sirat_button_border_radius = get_theme_mod('sirat_button_border_radius');
	if($sirat_button_border_radius != false){
		$custom_css .='.post-main-box more-btn a{';
			$custom_css .='border-radius: '.esc_html($sirat_button_border_radius).'px;';
		$custom_css .='}';
	}

	/*------------- Single Blog Page------------------*/

	$sirat_single_blog_comment_show_hide = get_theme_mod('sirat_single_blog_comment_show_hide',true);
	if($sirat_single_blog_comment_show_hide != true){
		$custom_css .='#comments{';
			$custom_css .='display: none;';
		$custom_css .='}';
	}

	$sirat_single_blog_post_navigation_show_hide = get_theme_mod('sirat_single_blog_post_navigation_show_hide',true);
	if($sirat_single_blog_post_navigation_show_hide != true){
		$custom_css .='.post-navigation{';
			$custom_css .='display: none;';
		$custom_css .='}';
	}

	/*------------------------------Responsive Media -----------------------*/

	$topbar = get_theme_mod( 'sirat_resp_topbar_hide_show',true);
    if($topbar == true){
    	$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='.top-bar{';
			$custom_css .='display:block;';
		$custom_css .='} }';
	}else if($topbar == false){
		$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='.top-bar{';
			$custom_css .='display:none;';
		$custom_css .='} }';
	}

	$stickyheader = get_theme_mod( 'sirat_stickyheader_hide_show',true);
    if($stickyheader == true){
    	$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='.header-fixed{';
			$custom_css .='display:block;';
		$custom_css .='} }';
	}else if($stickyheader == false){
		$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='.header-fixed{';
			$custom_css .='display:none;';
		$custom_css .='} }';
	}

	$stickyheader = get_theme_mod( 'sirat_resp_slider_hide_show',true);
    if($stickyheader == true){
    	$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='#slider{';
			$custom_css .='display:block;';
		$custom_css .='} }';
	}else if($stickyheader == false){
		$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='#slider{';
			$custom_css .='display:none;';
		$custom_css .='} }';
	}

	$metabox = get_theme_mod( 'sirat_metabox_hide_show',true);
    if($metabox == true){
    	$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='.post-info{';
			$custom_css .='display:block;';
		$custom_css .='} }';
	}else if($metabox == false){
		$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='.post-info{';
			$custom_css .='display:none;';
		$custom_css .='} }';
	}

	$sidebar = get_theme_mod( 'sirat_sidebar_hide_show',true);
    if($sidebar == true){
    	$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='#sidebar{';
			$custom_css .='display:block;';
		$custom_css .='} }';
	}else if($sidebar == false){
		$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='#sidebar{';
			$custom_css .='display:none;';
		$custom_css .='} }';
	}

	$scroll_top = get_theme_mod( 'sirat_resp_scroll_top_hide_show',true);
    if($scroll_top == true){
    	$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='a.scrollup{';
			$custom_css .='display:block;';
		$custom_css .='} }';
	}else if($scroll_top == false){
		$custom_css .='@media screen and (max-width:575px) {';
		$custom_css .='a.scrollup{';
			$custom_css .='display:none !important;';
		$custom_css .='} }';
	}

	/*------------- Woocommerce Products ------------------*/

	$sirat_related_product_show_hide = get_theme_mod('sirat_related_product_show_hide',true);
	if($sirat_related_product_show_hide != true){
		$custom_css .='.related.products{';
			$custom_css .='display: none;';
		$custom_css .='}';
	}

	$sirat_products_border_radius = get_theme_mod('sirat_products_border_radius');
	if($sirat_products_border_radius != false){
		$custom_css .='.woocommerce ul.products li.product, .woocommerce-page ul.products li.product{';
			$custom_css .='border-radius: '.esc_html($sirat_products_border_radius).'px;';
		$custom_css .='}';
	}

	/*-------------- Copyright Alignment ----------------*/

	$sirat_copyright_font_size = get_theme_mod('sirat_copyright_font_size');
	if($sirat_copyright_font_size != false){
		$custom_css .='.copyright p{';
			$custom_css .='font-size: '.esc_html($sirat_copyright_font_size).';';
		$custom_css .='}';
	}

	$sirat_copyright_padding_top_bottom = get_theme_mod('sirat_copyright_padding_top_bottom');
	if($sirat_copyright_padding_top_bottom != false){
		$custom_css .='#footer-2{';
			$custom_css .='padding-top: '.esc_html($sirat_copyright_padding_top_bottom).'; padding-bottom: '.esc_html($sirat_copyright_padding_top_bottom).';';
		$custom_css .='}';
	}

	$sirat_copyright_alingment = get_theme_mod('sirat_copyright_alingment');
	if($sirat_copyright_alingment != false){
		$custom_css .='.copyright p{';
			$custom_css .='text-align: '.esc_html($sirat_copyright_alingment).';';
		$custom_css .='}';
	}

	/*----------------Social Icons Settings ------------------*/

	$sirat_social_icon_font_size = get_theme_mod('sirat_social_icon_font_size');
	if($sirat_social_icon_font_size != false){
		$custom_css .='#sidebar .custom-social-icons i, #footer .custom-social-icons i{';
			$custom_css .='font-size: '.esc_html($sirat_social_icon_font_size).';';
		$custom_css .='}';
	}

	$sirat_social_icon_padding = get_theme_mod('sirat_social_icon_padding');
	if($sirat_social_icon_padding != false){
		$custom_css .='#sidebar .custom-social-icons i, #footer .custom-social-icons i{';
			$custom_css .='padding: '.esc_html($sirat_social_icon_padding).';';
		$custom_css .='}';
	}

	$sirat_social_icon_width = get_theme_mod('sirat_social_icon_width');
	if($sirat_social_icon_width != false){
		$custom_css .='#sidebar .custom-social-icons i, #footer .custom-social-icons i{';
			$custom_css .='width: '.esc_html($sirat_social_icon_width).';';
		$custom_css .='}';
	}

	$sirat_social_icon_height = get_theme_mod('sirat_social_icon_height');
	if($sirat_social_icon_height != false){
		$custom_css .='#sidebar .custom-social-icons i, #footer .custom-social-icons i{';
			$custom_css .='height: '.esc_html($sirat_social_icon_height).';';
		$custom_css .='}';
	}

	$sirat_social_icon_border_radius = get_theme_mod('sirat_social_icon_border_radius');
	if($sirat_social_icon_border_radius != false){
		$custom_css .='#sidebar .custom-social-icons i, #footer .custom-social-icons i{';
			$custom_css .='border-radius: '.esc_html($sirat_social_icon_border_radius).'px;';
		$custom_css .='}';
	}

	/*------------- Footer Background Color ------------------*/

	$sirat_footer_background_color = get_theme_mod('sirat_footer_background_color');
	if($sirat_footer_background_color != false){
		$custom_css .='#footer{';
			$custom_css .='background-color: '.esc_html($sirat_footer_background_color).';';
		$custom_css .='}';
	}

	$sirat_footer_background_image = get_theme_mod('sirat_footer_background_image');
	if($sirat_footer_background_image != false){
		$custom_css .='#footer{';
			$custom_css .='background: url('.esc_html($sirat_footer_background_image).');';
		$custom_css .='}';
	}

	/*----------------Sroll to top Settings ------------------*/

	$sirat_scroll_to_top_font_size = get_theme_mod('sirat_scroll_to_top_font_size');
	if($sirat_scroll_to_top_font_size != false){
		$custom_css .='.scrollup{';
			$custom_css .='font-size: '.esc_html($sirat_scroll_to_top_font_size).';';
		$custom_css .='}';
	}

	$sirat_scroll_to_top_padding_top_bottom = get_theme_mod('sirat_scroll_to_top_padding_top_bottom');
	if($sirat_scroll_to_top_padding_top_bottom != false){
		$custom_css .='.scrollup{';
			$custom_css .='padding-top: '.esc_html($sirat_scroll_to_top_padding_top_bottom).'; padding-bottom: '.esc_html($sirat_scroll_to_top_padding_top_bottom).';';
		$custom_css .='}';
	}

	$sirat_scroll_to_top_width = get_theme_mod('sirat_scroll_to_top_width');
	if($sirat_scroll_to_top_width != false){
		$custom_css .='.scrollup{';
			$custom_css .='width: '.esc_html($sirat_scroll_to_top_width).';';
		$custom_css .='}';
	}

	$sirat_scroll_to_top_height = get_theme_mod('sirat_scroll_to_top_height');
	if($sirat_scroll_to_top_height != false){
		$custom_css .='.scrollup{';
			$custom_css .='height: '.esc_html($sirat_scroll_to_top_height).';';
		$custom_css .='}';
	}

	$sirat_scroll_to_top_border_radius = get_theme_mod('sirat_scroll_to_top_border_radius');
	if($sirat_scroll_to_top_border_radius != false){
		$custom_css .='.scrollup{';
			$custom_css .='border-radius: '.esc_html($sirat_scroll_to_top_border_radius).'px;';
		$custom_css .='}';
	}

	/*------------------ Skin Option  -------------------*/

	$skin_opt = get_theme_mod( 'sirat_background_skin','Without Background');
    if($skin_opt == 'With Background'){
		$custom_css .='.inner-service, .post-main-box, #sidebar .widget, .woocommerce ul.products li.product, .woocommerce-page ul.products li.product, .middle-header,.serv-box,.front-page-content,.background-skin-page, .woocommerce .woocommerce-ordering select, #primary{';
			$custom_css .='background-color: #fff;';
		$custom_css .='}';
		$custom_css .='.related-post h3{';
			$custom_css .='padding: 15px 15px 15px;';
		$custom_css .='}';
		$custom_css .='.inner-service, #content-vw .background-skin-page, #primary{';
			$custom_css .='padding: 15px; margin-bottom:10px;';
		$custom_css .='}';
	}else if($skin_opt == 'Without Background'){
		$custom_css .='{';
			$custom_css .='background-color: transparent;';
		$custom_css .='}';
	}