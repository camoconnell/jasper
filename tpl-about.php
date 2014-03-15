<?php
/*
	Template Name: About
*/ 
get_header(); ?>
 
    <section id='about' class="page">

        <div class="inner">

            <div class="content-wrap">

                <div class="divider tBackgroundColor"></div>

                <!-- Up arrow --> 
                <?php  include(TEMPLATEPATH.'/inc/JaSper-uparrow.php');  ?>
              

                <div class="content-selector">
                    <p class="current">
                        <span class="large">Background</span>
                        <span class="small">B</span>
                    </p>
                    <p>
                        <span class="large">Skills</span>
                        <span class="small">S</span>
                    </p>
                    <p>
                        <span class="large">Positions</span>
                        <span class="small">P</span>
                    </p>
                </div>

                <div class="scrollpane"> 
                        
                    <div class="content">

                        <section id="about-background" class="skew">
                            <div class="blurb counter-skew">
                                <p><?php the_field('about_blurb'); ?></p>
                                <div class="signature-wrap">
                                    <img class="reps" src="<?php echo get_template_directory_uri() ?>/images/reps.png" />
                                    <img class="signature" src="<?php echo get_template_directory_uri() ?>/images/sig.png" />
                                    <span class="job-title">Registered Exercise Professional</span>
                                </div>
                            </div>
                        </section> 

                        <section class="skills" id="about-skills">
                            <ul class="clearfix skills-js">
                                <li>
                                    <div class="fifty-fifty aspect-ratio">
                                    </div>
                                    <div class="spacer"></div>
                                    <div class="skill">
                                        <h3>SKILLS</h3>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section class="positions" id="about-positions">
                            <h1 class="skew">Positions</h1>
                            <div class="clearfix positions-js"></div>
                        </section> 
                    </div>
                </div>
            </div>

            <?php  include(TEMPLATEPATH.'/inc/JaSper-followme.php');  ?>
      
        </div>

        <!-- Leave background outside inner element. -->
        <div class="background" style="background-image:url('<?php echo get_feature_image( get_field('background') ); ?>')" ></div>
        

    </section>
<?php get_footer(); ?>