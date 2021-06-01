<?php
/**
 * Template Name: Main Page
 */
get_header(); ?>

<main id="content" role="main" class="middle-align">
	<div class="container">
		<div class="row pb-3">
			<div class="col-12">
				<?php echo do_shortcode('[product_page id="10"]'); ?>
			</div>
		</div>
	</div>
</main>

<?php get_footer(); ?>