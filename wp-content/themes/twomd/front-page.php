<?php get_header();?>

<section class="content">
    <div class="container">
        <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-10 col-xl-8 col-xxl-7">
                <div class="content_wrapper">
                    <div class="content_block">
                        <h1 class="content_title"><?php  the_title(); ?></h1>
                        <?php
                            $str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quia magni ipsum, consequatur ad ea voluptates minima voluptate soluta iste esse obcaecati aut sapiente dolorum et tempore hic quae autem.Praesentium temporibus laborum, saepe tempora alias harum ducimus deleniti totam illum?";
                            $str = strip_tags($str);
                            if (strlen($str) > 100) {
                                $textPrev = substr($str, 0, 100);
                                $textPrev = rtrim($textPrev, "!,.-");
                                $textPrev = substr($textPrev, 0, strrpos($textPrev, ' '));
                                $textNext = substr($str, strlen($textPrev));
                                ?>
                                <div class="review-text">
                                    <span class="text-prev"><?=$textPrev?></span><span class="text-next"><?=$textNext?></span>
                                    <button class="btn text-more" id="more">More</button>
                                    <button class="btn" id="show">Show gallery</button>
                                </div>
                                <?
                            } else {
                                ?>
                                <div class="review-text"><?=$str?></div>
                                <?
                            }
                        ?>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
</section>

<!-- popup window -->
<dialog>            
    <div class="dialog_texts">
        <div class="dialog_title">Gallery in modal</div> 
        <p><img src="<?php echo get_template_directory_uri(); ?>/img/globe.png" alt="Picsum icon" class="dialog_icon">picsum photos</p> 
    </div>      
    <div class="swiper">                    
        <div class="swiper-wrapper">
            <?php 
            $json = file_get_contents('https://picsum.photos/v2/list?limit=10');
            $someArray = json_decode($json, true);
            foreach ($someArray as $key => $value) {
                echo 
                '<div class="swiper-slide" style="background:url(' . $value['download_url'] . ');background-position:center;background-repeat:no-repeat;background-size: cover;">' . '<p class="author_name">' . $value['author']. '</p></div>';
            } ?> 
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    <button id="close">&#10006;</button>
</dialog>

<?php get_footer(); ?>