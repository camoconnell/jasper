<?php
/*
	Template Name: Training 
*/ 
get_header();

?>
 
	<section id='training' class="page">

        <!-- Scrollable content -->
        <div class="inner scrollpane">
            <div class="content-wrap clearfix">
 				<div class="price one-on-one">
 					<div class="title">
 						<div id="one"></div>
 						<h1>One to one</h1>
 					</div>
 					<div class="info">
	 					<div class="top scoop"></div>
	 					<div class="middle">
	 						<div class="content">
	 							<p>
		 							Pay as you go <br>
									50 - 60 min <br> 
									session with Nick.
								</p>
								<h2 >£75-</h2>
							</div>
							<div class="divy"><p>or</p></div>
							<div class="content">
	 							<p>
		 							<strong>10 x one-to-one</strong><br>
									sessions with Nick. 
								</p>
								<h2 >£650-</h2>
							</div>
	 					</div>
	 					<div class="bottom scoop"></div>
	 				</div>
 				</div>
 				<div class="price one-on-two">
 					<div class="title">
 						<div id="two"></div>
 						<h1>One to two</h1>
 					</div>
 					<div class="info">
	 					<div class="top scoop"></div>
	 					<div class="middle">
	 						<div class="content">
	 							<p>
		 							Pay as you go <br>
									50 - 60 min <br> 
									session with Nick.
								</p>
								<h2 >£90-</h2>
	 						</div>
	 						<div class="divy"><p>or</p></div>
							<div class="content">
	 							<p>
		 							<strong>10 x one-to-two</strong><br>
									sessions with Nick. 
								</p>
								<h2 >£850-</h2>
							</div>
	 					</div>
	 					<div class="bottom scoop"></div>
	 				</div>
	 				<div class="shadow"></div>
 				</div>
            </div>
        </div>

        <!-- Leave background outside inner element. -->
        <div class="background" style="background-image:url('<?php echo get_feature_image( get_field('background') ); ?>')" ></div>

	</section>
        
<?php get_footer(); ?>