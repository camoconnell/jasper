<?php
get_header();

?> 
	<section id='journal'  class="page">
         
        <div class="inner">    	

        	<!-- single post -->
        	<!-- <div id="single"></div>  -->

            <div class="content-wrap">

            	<div class="divider tBackgroundColor"></div>

            	<!-- Up arrow --> 
                <?php  include(TEMPLATEPATH.'/inc/JaSper-uparrow.php');  ?> 


            	<div class="scrollpane">
            		<div class="content">

		            	<?php  include(TEMPLATEPATH.'/inc/JaSper-categoryWidget.php');  ?>
						
			            <section id='posts-wrap' class="layout-large tOpacity">
							
		            	</section><!-- #posts-wrap -->

		            	<section class="pagination group tOpacity"> 
							<!-- <div class="partition"></div>
							<div class="btn"> 
								<h2> More </h2>
								<div class="hitArea"></div>
							</div>
							<div class="partition"></div>  -->
				        </section>
	        		</div>
	        	</div>
			</div>  

 			<!-- get journal bg img, parse it through get_feature_image(), return smart phone content --> 
        	<div class="background" style="background-image:url('<?php echo get_feature_image( get_field('background', getIdFromSlug('journal')) ); ?>')" ></div>		 
	    </div>
 	
	</section>
        
<?php get_footer(); ?>