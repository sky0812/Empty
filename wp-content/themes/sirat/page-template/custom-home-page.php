<?php
/**
 * Template Name: Custom Home Page
 */
get_header(); ?>

<main id="content" role="main">

  <?php do_action( 'sirat_before_slider' ); ?>

  <div class="slider-refresh"><h3><?php esc_html_e('Add Slider','sirat'); ?></h3></div>
  <?php if( get_theme_mod( 'sirat_slider_arrows',true) != '') { ?>

    <?php $theme_lay = get_theme_mod( 'sirat_slider_background_options','Slideshow');
    if($theme_lay == 'Slideshow'){ ?>
      <section id="slider">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="<?php echo esc_attr(get_theme_mod( 'sirat_slider_speed',3000)) ?>">
          <?php $sirat_pages = array();
            for ( $count = 1; $count <= 4; $count++ ) {
              $mod = intval( get_theme_mod( 'sirat_slider_page' . $count ));
              if ( 'page-none-selected' != $mod ) {
                $sirat_pages[] = $mod;
              }
            }
            if( !empty($sirat_pages) ) :
              $args = array(
                'post_type' => 'page',
                'post__in' => $sirat_pages,
                'orderby' => 'post__in'
              );
              $query = new WP_Query( $args );
              if ( $query->have_posts() ) :
                $i = 1;
          ?>     
          <div class="carousel-inner" role="listbox">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?>
              <div <?php if($i == 1){echo 'class="carousel-item active"';} else{ echo 'class="carousel-item"';}?>>
                <?php the_post_thumbnail(); ?>
                <div class="carousel-caption">
                  <div class="inner_carousel">
                    <?php if( get_theme_mod('sirat_slider_title_hide_show',true) != ''){ ?>
                      <h1><?php the_title(); ?></h1>
                    <?php } ?>
                    <?php if( get_theme_mod('sirat_slider_content_hide_show',true) != ''){ ?>
                      <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_slider_excerpt_number','30')))); ?></p>
                    <?php } ?>
                    <?php if( get_theme_mod('sirat_slider_button_hide_show',true) != ''){ ?>
                      <?php if( get_theme_mod('sirat_slider_button_text','READ MORE') != ''){ ?>
                        <div class="more-btn">
                          <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_slider_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php esc_html_e( 'READ MORE','sirat' );?></span></a>
                        </div>
                      <?php } ?>
                    <?php } ?>
                  </div>
                </div>
              </div>
            <?php $i++; endwhile; 
            wp_reset_postdata();?>
          </div>
          <?php if( get_theme_mod('sirat_slider_indicator_show_hide',true) != ''){ ?>
            <ol class="carousel-indicators">
              <?php for($i=0;$i<count($sirat_pages);$i++) { ?>
                <li data-target="#carouselExampleIndicators" data-slide-to="<?php echo esc_attr($i); ?>" <?php if($i==0) { ?>class="active"<?php } ?>></li>
              <?php } ?>
            </ol>
          <?php }?>
          <?php else : ?>
              <div class="no-postfound"></div>
          <?php endif;
          endif;?>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
            <span class="screen-reader-text"><?php esc_attr_e( 'Previous','sirat' );?></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
            <span class="screen-reader-text"><?php esc_attr_e( 'Next','sirat' );?></span>
          </a>
        </div>
        <div class="clearfix"></div>
      </section>
    <?php }else if($theme_lay == 'Image'){ ?>
      <section id="slider">
        <?php $sirat_pages = array();
          for ( $count = 0; $count <= 0; $count++ ) {
            $mod = absint( get_theme_mod( 'sirat_slider2_page' ));
            if ( 'page-none-selected' != $mod ) {
              $sirat_pages[] = $mod;
            }
          }
          if( !empty($sirat_pages) ) :
            $args = array(
              'post_type' => 'page',
              'post__in' => $sirat_pages,
              'orderby' => 'post__in'
            );
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
              $count = 0;
              while ( $query->have_posts() ) : $query->the_post(); ?>
                <div class="slider-image">
                  <?php the_post_thumbnail(); ?>
                </div>
                <div class="carousel-caption">
                  <div class="inner_carousel">
                    <h1><?php the_title(); ?></h1>
                    <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_slider_excerpt_number','30')))); ?></p>
                    <?php if( get_theme_mod('sirat_slider_button_text','READ MORE') != ''){ ?>
                      <div class="more-btn">
                        <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_slider_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php esc_html_e( 'READ MORE','sirat' );?></span></a>
                      </div>
                    <?php } ?>
                  </div>
                </div>
              <?php $count++; endwhile; ?>
            <?php else : ?>
              <div class="no-postfound"></div>
            <?php endif;
          endif;
          wp_reset_postdata();
        ?>
      </section>
    <?php }else if($theme_lay == 'Gradient'){ ?>
      <section id="slider">
        <?php $sirat_pages = array();
          for ( $count = 0; $count <= 0; $count++ ) {
            $mod = absint( get_theme_mod( 'sirat_slider2_page' ));
            if ( 'page-none-selected' != $mod ) {
              $sirat_pages[] = $mod;
            }
          }
          if( !empty($sirat_pages) ) :
            $args = array(
              'post_type' => 'page',
              'post__in' => $sirat_pages,
              'orderby' => 'post__in'
            );
            $query = new WP_Query( $args );
            if ( $query->have_posts() ) :
              $count = 0;
              while ( $query->have_posts() ) : $query->the_post(); ?>
                <div class="slider-page-image">
                  
                </div>
                <div class="slider-box-content">
                  <div class="slider-inner-content">
                    <h1><?php the_title(); ?></h1>
                    <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_slider_excerpt_number','30')))); ?></p>
                    <?php if( get_theme_mod('sirat_slider_button_text','READ MORE') != ''){ ?>
                      <div class="more-btn">
                        <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_slider_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php esc_html_e( 'READ MORE','sirat' );?></span></a>
                      </div>
                    <?php } ?>
                  </div>
                </div>
              <?php $count++; endwhile; ?>
            <?php else : ?>
              <div class="no-postfound"></div>
            <?php endif;
          endif;
          wp_reset_postdata();
        ?>
      </section>
    <?php }else if($theme_lay == 'Video'){ ?>
      <section id="slider"> 
        <div class="slider-video">
          <embed width="100%" height="500px" src="<?php echo esc_url( get_theme_mod( 'sirat_slider_background_video_url','' ) ); ?>?autoplay=1&loop=1&autopause=0" allow="autoplay;"  autostart="true" allowfullscreen>
        </div>
      </section>
    <?php } ?>

  <?php } ?>

  <?php do_action( 'sirat_after_slider' ); ?>

  <div class="services-refresh"><h3><?php esc_html_e('Add Services section','sirat'); ?></h3></div>
  <section id="serv-section">
    <div class="container">
      <div class="heading-box">
        <div class="row">
          <?php if( get_theme_mod( 'sirat_section_title') != '') { ?>
            <div class="col-lg-4 col-md-4">        
              <h2><?php echo esc_html(get_theme_mod('sirat_section_title',''));?></h2>
            </div>
          <?php } ?>
          <?php if( get_theme_mod( 'sirat_section_text') != '') { ?>
            <div class="col-lg-8 col-md-8">
              <p><?php echo esc_html(get_theme_mod('sirat_section_text',''));?></p>        
            </div>
          <?php } ?>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-md-12">
          <div class="row">
            <?php
              $catData =  get_theme_mod('sirat_our_services','');
              if($catData){
              $page_query = new WP_Query(array( 'category_name' => esc_html($catData,'sirat'))); ?>
              <?php while( $page_query->have_posts() ) : $page_query->the_post(); ?>
              <div class="col-lg-4 col-md-4">
                <div class="serv-box">
                  <?php the_post_thumbnail(); ?>
                  <h3><?php the_title(); ?></h3>
                  <p><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt, esc_attr(get_theme_mod('sirat_services_excerpt_number','30')))); ?></p>
                  <a href="<?php the_permalink(); ?>"><i class="<?php echo esc_attr(get_theme_mod('sirat_services_icon','fas fa-arrow-right')); ?>"></i>
                  <span class="screen-reader-text"><?php the_title(); ?></span></a>
                </div>
              </div>
              <?php endwhile;
              wp_reset_postdata();
            } ?>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <?php $sirat_pages = array();
            for ( $count = 0; $count <= 0; $count++ ) {
              $mod = absint( get_theme_mod( 'sirat_about_page' ));
              if ( 'page-none-selected' != $mod ) {
                $sirat_pages[] = $mod;
              }
            }
            if( !empty($sirat_pages) ) :
              $args = array(
                'post_type' => 'page',
                'post__in' => $sirat_pages,
                'orderby' => 'post__in'
              );
              $query = new WP_Query( $args );
              if ( $query->have_posts() ) :
                $count = 0;
                while ( $query->have_posts() ) : $query->the_post(); ?>
                  <div class="box">
                    <?php the_post_thumbnail(); ?>
                    <div class="box-content">
                      <div class="inner-content">
                        <h3 class="title"><?php the_title(); ?></h3>
                        <p class="post"><?php $excerpt = get_the_excerpt(); echo esc_html( sirat_string_limit_words( $excerpt,10 ) ); ?></p>
                        <?php if( get_theme_mod('sirat_about_button_text','READ MORE') != ''){ ?>
                          <div class="about-btn">
                            <a href="<?php echo esc_url(get_permalink()); ?>"><?php echo esc_html(get_theme_mod('sirat_about_button_text',__('READ MORE','sirat')));?><span class="screen-reader-text"><?php esc_html_e( 'READ MORE','sirat' );?></span></a>
                          </div>
                        <?php } ?>
                      </div>
                    </div>
                  </div>
                <?php $count++; endwhile; ?>
              <?php else : ?>
                <div class="no-postfound"></div>
              <?php endif;
            endif;
            wp_reset_postdata();
          ?>
        </div>
      </div>
    </div>
  </section>

  <?php do_action( 'sirat_after_second_section' ); ?>

  <div id="content-vw">
    <div class="container">
      <?php while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
      <?php endwhile; // end of the loop. ?>
    </div>
  </div>

</main>

<?php get_footer(); ?>
