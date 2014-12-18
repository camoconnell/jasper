<?php
/*
	Template Name: Journal
*/
get_header();

?>
	<section id='journal' class="page">


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

			            <section id='posts-wrap' class="tOpacity posts-wrap-js">
						</section><!-- #posts-wrap -->

		            	<section class="pagination group tOpacity">
							<!-- <div class="partition"></div>
							<div class="btn">
								<h2> More </h2>
								<div class="hitArea"></div>
							</div>
							<div class="partition"></div> -->
				        </section>
				    </div>
	            </div>
	        </div>

	    </div>

	    <!-- Leave background outside inner element. -->
        <div class="background" style="background-image:url('<?php echo get_feature_image( get_field('background') ); ?>')" ></div>

	</section>

<?php get_footer(); ?>