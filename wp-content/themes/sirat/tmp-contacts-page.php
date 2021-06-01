<?php
/**
 * Template Name: Contacts Page
 */
get_header(); ?>

<div class="container">
    <div class="row pb-3">
        <div class="col-12">
            <h1><?php the_title(); ?></h1>
        </div>
    </div>
    <div class="row pb-3">
    	<div class="col-12 col-md-8 pb-3 pb-md-0">
    		<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.0144607844336!2d14.451657415175214!3d50.08601612143855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b949f6b238b8b%3A0xc9fe008a88eedb2d!2sProkopova%202856%2F10%2C%20130%2000%20Praha%203-%C5%BDi%C5%BEkov%2C%20Czechia!5e0!3m2!1sen!2sru!4v1587763882120!5m2!1sen!2sru" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
    	</div>
    	<div class="col-12 col-md-4 p-5 p-sm-4 p-md-3 d-flex flex-wrap text-center text-sm-left">
            <div class="col-12 col-sm-6 col-md-12">
                <span class="mb-2 d-block"><strong><?php pll_e('call-us'); ?></strong>  </span>
                <p><a href="tel:<?php echo get_theme_mod( 'sirat_contact_call'); ?>"><?php echo get_theme_mod( 'sirat_contact_call'); ?></a></p>
            </div>
            <div class="col-12 col-sm-6 col-md-12">
                <span><strong>E-mail:</strong></span>
                <p><a href="mailto:<?php echo get_theme_mod( 'sirat_contact_email'); ?>"><?php echo get_theme_mod( 'sirat_contact_email'); ?></a></p>
            </div>
             <div class="col-12 col-sm-6 col-md-12">
                <span><strong><?php pll_e('address'); ?></strong></span>
                <p>Address 2856/10, 130 00 Address 3, Address</p>
            </div>
            <div class="col-12 col-sm-6 col-md-12">
                <span><strong><?php pll_e('working-hours'); ?></strong></span>
                <p><?php pll_e('working-time'); ?></p>
            </div>
           <!-- <div class="col-12 d-flex flex-column justify-content-center text-center">
            <p style="font-size: 20px;text-decoration: underline;"><strong>Закажите звонок и наш менеджер свяжется с Вами:</strong></p>
        	<a class="btn btn-outline-white waves-effect waves-light" data-toggle="modal" data-target="#modalContactForm" style="cursor: pointer;background-color: #01c3c3!important;">ЗАКАЗАТЬ ЗВОНОК</a>
            </div> -->
    	</div>
    </div>
</div>

<?php get_footer(); ?>