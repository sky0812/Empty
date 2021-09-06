<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package twomd
 */

?>


	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-12 col-md-6 col-xl-3">
					<div class="footer_title">
						About me
					</div>
					<p class="footer_text">
						I have a passion for web-development.<br> Quick-learner, self-motivated, team player
					</p>
				</div>
				<div class="col-12 col-md-6 col-xl-3">
					<div class="footer_title">
						Dynamic part
					</div>
					<p class="footer_text">
						Today's date is <?php echo date("Y-m-d"); ?><br>
						Current time is <?php echo date("g:i a"); ?>
					</p>
				</div>
				<div class="col-12 col-md-6 col-xl-3">
					<div class="footer_title">
						Contact
					</div>
					<p class="footer_text">
						<a href="mailto:" class="footer_contacts">some mail</a>
						<a href="tel:" class="footer_contacts">+44 570 750 803</a>
					</p>
				</div>
				<div class="col-12 col-md-6 col-xl-2 col-xxl-1 offset-0 offset-xl-1 offset-xxl-2">
					<div class="footer_socials_wrapper">
						<a href="https://www.instagram.com/iliagriniuk0812/" class="footer_socials_link">
							<img src="<?php echo get_template_directory_uri(); ?>/img/inst.png" alt="Instagram icon" class="footer_socials">
						</a>
						<a href="twitter.com" class="footer_socials_link">
							<img src="<?php echo get_template_directory_uri(); ?>/img/twitter.png" alt="Twitter icon" class="footer_socials">
						</a>
						<a href="https://www.facebook.com/ilia.griniuk" class="footer_socials_link">
							<img src="<?php echo get_template_directory_uri(); ?>/img/fb.png" alt="Facebook icon" class="footer_socials">
						</a>						
					</div>
				</div>
			</div>
		</div>
	</footer>
</div><!-- #page -->

<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/js/script.js"></script>
<?php wp_footer(); ?>

</body>
</html>
