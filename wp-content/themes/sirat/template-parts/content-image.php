<?php
/**
 * The template part for top header
 *
 * @package Sirat 
 * @subpackage sirat
 * @since Sirat 1.0
 */
?>
<?php 
  $archive_year  = get_the_time('Y'); 
  $archive_month = get_the_time('m'); 
  $archive_day   = get_the_time('d'); 
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('inner-service'); ?>>
  <div class="post-main-box ">
    <?php $theme_lay = get_theme_mod( 'sirat_blog_layout_option','Default');
      if($theme_lay == 'Default'){ ?>
      <div class="row m-0">
        <?php if(has_post_thumbnail()) {?>
          <div class="box-image col-lg-6 col-md-6">
            <?php the_post_thumbnail(); ?>
          </div>
        <?php } ?>
        <div class="new-text <?php if(has_post_thumbnail()) { ?>col-lg-6 col-md-6" <?php } else { ?>col-lg-12 col-md-12" <?php } ?>>
          <h2 class="section-title"><a href="<?php echo esc_url(get_permalink()); ?>"><?php the_title();?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
          <div class="post-info">
            <?php if(get_theme_mod('sirat_toggle_postdate',true)==1){ ?>
              <span class="entry-date"><i class="fas fa-calendar-alt"></i><a href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day)); ?>"><?php echo esc_html( get_the_date() ); ?><span class="screen-reader-text"><?php echo esc_html( get_the_date() ); ?></span></a></span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('sirat_toggle_author',true)==1){ ?>
              <span class="entry-author"><i class="far fa-user"></i><a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' )) ); ?>"><?php the_author(); ?><span class="screen-reader-text"><?php the_author(); ?></span></a></span><span>|</span>
            <?php } ?>

            <?php if(get_theme_mod('sirat_toggle_comments',true)==1){ ?>
              <span class="entry-comments"><i class="fas fa-comments"></i><?php comments_number( __('0 Comment', 'sirat'), __('0 Comments', 'sirat'), __('% Comments', 'sirat') ); ?> </span>
            <?php } ?>
          </div>
          <div class="entry-content">
            <?php $theme_lay = get_theme_mod( 'sirat_excerpt_settings','Excerpt');
              if($theme_lay == 'Content'){ ?>
                <?php the_content(); ?>
              <?php }
              if($theme_lay == 'Excerpt'){ ?>
                <?php if(get_the_excerpt()) { ?>
                  <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_excerpt_number','30')))); ?> <?php echo esc_html(get_theme_mod('sirat_excerpt_suffix',''));?></p>
                <?php }?>
              <?php }?>
          </div>
          <?php if( get_theme_mod('sirat_button_text','READ MORE') != ''){ ?>
            <div class="more-btn">
              <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php echo esc_html(get_theme_mod('sirat_button_text',__('READ MORE','sirat')));?></span></a>
            </div>
          <?php } ?>
        </div>
      </div>
    <?php }else if($theme_lay == 'Center'){ ?>
      <div class="new-text">
        <h2 class="section-title"><a href="<?php echo esc_url(get_permalink()); ?>"><?php the_title();?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
        <?php if( get_theme_mod( 'sirat_featured_image_hide_show',true) != '') { ?>
          <div class="box-image">
            <?php the_post_thumbnail(); ?>
          </div>
        <?php } ?>
        <div class="post-info">
          <?php if(get_theme_mod('sirat_toggle_postdate',true)==1){ ?>
            <span class="entry-date"><i class="fas fa-calendar-alt"></i><a href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day)); ?>"><?php echo esc_html( get_the_date() ); ?><span class="screen-reader-text"><?php echo esc_html( get_the_date() ); ?></span></a></span><span>|</span>
          <?php } ?>

          <?php if(get_theme_mod('sirat_toggle_author',true)==1){ ?>
            <span class="entry-author"><i class="far fa-user"></i><a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' )) ); ?>"><?php the_author(); ?><span class="screen-reader-text"><?php the_author(); ?></span></a></span><span>|</span>
          <?php } ?>

          <?php if(get_theme_mod('sirat_toggle_comments',true)==1){ ?>
            <span class="entry-comments"><i class="fas fa-comments"></i><?php comments_number( __('0 Comment', 'sirat'), __('0 Comments', 'sirat'), __('% Comments', 'sirat') ); ?> </span>
          <?php } ?>
        </div>
        <div class="entry-content">
          <?php $theme_lay = get_theme_mod( 'sirat_excerpt_settings','Excerpt');
            if($theme_lay == 'Content'){ ?>
              <?php the_content(); ?>
            <?php }
            if($theme_lay == 'Excerpt'){ ?>
              <?php if(get_the_excerpt()) { ?>
                <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_excerpt_number','30')))); ?> <?php echo esc_html(get_theme_mod('sirat_excerpt_suffix',''));?></p>
              <?php }?>
            <?php }?>
        </div>
        <?php if( get_theme_mod('sirat_button_text','READ MORE') != ''){ ?>
          <div class="more-btn">
            <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php echo esc_html(get_theme_mod('sirat_button_text',__('READ MORE','sirat')));?></span></a>
          </div>
        <?php } ?>
      </div>
    <?php }else if($theme_lay == 'Left'){ ?>
      <div class="new-text">
        <?php if( get_theme_mod( 'sirat_featured_image_hide_show',true) != '') { ?>
          <div class="box-image">
            <?php the_post_thumbnail(); ?>
          </div>
        <?php } ?>
        <h2 class="section-title"><a href="<?php echo esc_url(get_permalink()); ?>"><?php the_title();?><span class="screen-reader-text"><?php the_title(); ?></span></a></h2>
        <div class="post-info">
          <?php if(get_theme_mod('sirat_toggle_postdate',true)==1){ ?>
            <span class="entry-date"><i class="fas fa-calendar-alt"></i><a href="<?php echo esc_url( get_day_link( $archive_year, $archive_month, $archive_day)); ?>"><?php echo esc_html( get_the_date() ); ?><span class="screen-reader-text"><?php echo esc_html( get_the_date() ); ?></span></a></span><span>|</span>
          <?php } ?>

          <?php if(get_theme_mod('sirat_toggle_author',true)==1){ ?>
            <span class="entry-author"><i class="far fa-user"></i><a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' )) ); ?>"><?php the_author(); ?><span class="screen-reader-text"><?php the_author(); ?></span></a></span><span>|</span>
          <?php } ?>

          <?php if(get_theme_mod('sirat_toggle_comments',true)==1){ ?>
            <span class="entry-comments"><i class="fas fa-comments"></i><?php comments_number( __('0 Comment', 'sirat'), __('0 Comments', 'sirat'), __('% Comments', 'sirat') ); ?> </span>
          <?php } ?>
        </div>
        <div class="entry-content">
          <?php $theme_lay = get_theme_mod( 'sirat_excerpt_settings','Excerpt');
            if($theme_lay == 'Content'){ ?>
              <?php the_content(); ?>
            <?php }
            if($theme_lay == 'Excerpt'){ ?>
              <?php if(get_the_excerpt()) { ?>
                <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_excerpt_number','30')))); ?> <?php echo esc_html(get_theme_mod('sirat_excerpt_suffix',''));?></p>
              <?php }?>
            <?php }?>
        </div>
        <?php if( get_theme_mod('sirat_button_text','READ MORE') != ''){ ?>
          <div class="more-btn">
            <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php echo esc_html(get_theme_mod('sirat_button_text',__('READ MORE','sirat')));?></span></a>
          </div>
        <?php } ?>
      </div>
    <?php } ?>
  </div>
</article>