<?php
/**
 * The front page template file
 *
 * If the user has selected a static page for their homepage, this is what will
 * appear.
 * Learn more: https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since Twenty Seventeen 1.0
 * @version 1.0
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">
		<div class="wrap">			
			<div class="home_title">
				Шоппинг онлайн
			</div>
			<?php 
			 echo do_shortcode('[product_category limit="6" columns="3" paginate="true" orderby="rand" category="first,second,third,fourth,fifth"]');
			?>
		<div class="form_wrap">		
			<div class="home_title">
				Свяжитесь с нами
			</div>
			<?php echo do_shortcode('[contact-form-7 id="19" title="Форма связи для главной страницы"]'); ?>
		</div>
		</div>

	</main><!-- #main -->
</div><!-- #primary -->


<?php
get_footer();
