<?php
/*
	Template Name: Goodwords
*/ 
get_header(); ?>
    
    <section id='good-words' class="page">
        
        <!-- Scrollable content -->
        <div class="inner">
            <div class="content-wrap">

            	<div class="divider tBackgroundColor"></div>

                <div class="scrollpane"> 
                    <div class="content">
						<section class="words">
							<div class="clearfix words-js"></div>
						</section> 
                    </div>
                </div>
            </div>
        </div>
 
 		<!-- Leave background outside inner element. -->
        <div class="background" style="background-image:url('<?php echo get_feature_image( get_field('background') ); ?>')" ></div>
        
    </section>
<?php get_footer(); ?>