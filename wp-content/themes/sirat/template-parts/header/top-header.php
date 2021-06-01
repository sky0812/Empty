<?php
/**
 * The template part for header
 *
 * @package Sirat 
 * @subpackage sirat
 * @since Sirat 1.0
 */
?>

<?php if( get_theme_mod( 'sirat_contact_text') != '' || get_theme_mod( 'sirat_contact_call') != '' || get_theme_mod( 'sirat_header_search') != '' ) { ?>

<?php if( get_theme_mod('sirat_topbar_hide_show',true) != ''){ ?>
	<div class="top-bar">
		<div class="container">
			<div class="row" style="color:#000;">
				<div class="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
					<a class="logo_img" href="/"><img src="<?php pll_e('logo-image'); ?>" alt="" /></a>
			    </div>
			    <div class="col-lg-4 col-md-4 d-flex justify-content-center align-items-center">
				    <?php if( get_theme_mod( 'sirat_contact_call') != '') { ?>
	          			<p class="d-flex align-items-center"><a target="_blank" href="https://api.whatsapp.com/send?phone=<?php echo get_theme_mod( 'sirat_contact_call'); ?>" style="display: block;height: 30px;"><img src="<?php pll_e('wa-image'); ?>" style="height: 100%;"> </a>&ensp;<a target="_blank" href="tel:<?php echo get_theme_mod( 'sirat_contact_call'); ?>"><i class="<?php echo esc_attr(get_theme_mod('sirat_phone_icon','fas fa-phone')); ?>"></i><?php echo esc_html(get_theme_mod('sirat_contact_call',''));?></a></p>
	    			<?php } ?>					
			    </div>
			    <div class="col-lg-4 col-md-4 d-flex justify-content-center">
				    <?php if( get_theme_mod( 'sirat_contact_email') != '') { ?>
	          			<p class="d-flex align-items-center"><a target="_blank" href="mailto:<?php echo get_theme_mod( 'sirat_contact_email'); ?>"><i class="<?php echo esc_attr(get_theme_mod('sirat_contact_email_icon','far fa-envelope')); ?>"></i><?php echo esc_html(get_theme_mod('sirat_contact_email',''));?></a></p>
	        		<?php }?>
<!-- 				    <?php dynamic_sidebar('social-links'); ?> -->
			    </div>
			</div>
		</div>
	</div>
<?php } ?>

<?php }?>