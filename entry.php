<?php
/**
 * The Template for displaying all post entries.
 *
 * @package JaSper
 */
?>
<div class='post-wrap' data-id="<?php 
        global $post;
        echo get_page_id( $post );
    ?>">
	<div  class='post-inner'>

        <div class="media">
			<div class="post-title-wrap skew">
            	<div class="post-title-outer">
                	<h2 class="post-title-inner">
                		<?php the_title()?>
                	</h2>
	        		<h3 class="date">
	    				<?php 
	    					the_time(" j.n.y ");
	    				?>
	    			</h3>
                </div>
                <div class="clear"></div>
            </div>
              
            <div class="post-img"><img src=<?php echo get_feature_image( get_field('feature_image') ); ?> /></div>
            
        </div>
      

        <div class="category-wrap">

        </div> 


        <div class="copy-wrap">
            <div class="copy">
                <?php echo content( 30 , get_field( 'copy' ) ) ?>
            </div>
            <div class="image-clip"></div>
        </div> 
        

		<div class="nav-wrap"> 
    		<a href="<?php the_permalink() ?>" title="<?php the_title()?>" class='continue-read'>
                <h3>
                    <?php echo _e('Continue Read') ?>
                </h3>
            </a>
            <span class="comment-count"><?php /*get_fb_comment_count()*/ ?> </span>
        </div> 

    </div>

    <div class="bottom-nav-wrap">
	    <!-- Social Media -->
        <div class="social-media-icons">
            <div class="holder"> 
                <div class="facebook button"><h4>LIKE</h4></div>
                <div class="twitter button"><h4>TWEET</h4></div>
                <div class="gplus button"><h4>g PLUS</h4></div> 
            </div>
            <?php child_social_media_icons() ?>
        </div> 
    </div>
</div>