<?php
/**
 * The Template for displaying all single posts.
 *
 * @package JaSper
 */

get_header(); ?>


<section id="single" class="page">
	<div class="inner">
		<div class="content-wrap" data-id="<?php echo $post->ID ?>"> 

			<div class="divider tBackgroundColor"></div>

			<!-- Up arrow -->
            <?php  include(TEMPLATEPATH.'/inc/JaSper-uparrow.php');  ?>
            

        	<div class="scrollpane">

        		<div class="content">

					<div class="post-title-wrap skew  group">
		            	<div class="post-title-outer">
		                	<h2 class="post-title-inner"><?php the_title()?></h2>
			        		<div class="date"><?php the_time(" j.n.y ");?></div>
		                </div> 
		            </div>
		            <!-- Social Media -->
					<div  class='post-inner'> 
				        <div class="category-wrap"></div> 
				        <div class="copy-wrap ">
				            <div class="copy"><?php the_field('copy'); ?></div>
				        </div>
 
				        <div class="slideshow">  
					    	<?php if (get_field('video') != NULL): ?> 
					        	<div class='video slide'><?php echo get_field('video') ?></div> 
					        <?php endif; ?> 
							 
							<?php if( get_field('gallery') ):

								while( has_sub_field('gallery') ):

					                $attachment_id = get_sub_field('gallery_image');
					                $image = wp_get_attachment_image_src( $attachment_id, 'full' );

					                // full image fallback for mobiles
					                if( is_null($image) ) $image = wp_get_attachment_image_src( $attachment_id, 'full' );

					                ?>
					                <div class="slide"><img src="<?php echo $image[0]; ?>" /></div>
					            
					            <?php endwhile; ?> 
					        <?php endif; ?>  
						</div>
				    </div>
				</div> 
			</div> 
		</div>

        <?php  include(TEMPLATEPATH.'/inc/JaSper-followme.php');  ?>  

	</div> 

	<div class="background" style="background-image:url('<?php echo get_feature_image( get_field('background') ); ?>')" ></div>

</section><!-- #primary -->

<?php get_footer(); ?>