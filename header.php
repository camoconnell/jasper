<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <link rel="profile" href="http://gmpg.org/xfn/11" /> 
    <!--[if lt IE 9]>
    <script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
    <![endif]-->
    <title>Nick Morrison Fitness / <?php the_title(); ?></title>
    <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"> 
    <meta name="description" content="Organic Health. I hope this site serves as a useful and interesting resource for you to increase your knowledge about your body, and help you make good, informed choices to allow you to live the life you want." />

    <!-- Twitter Card data -->
    <meta name="twitter:card" content="photo">
    <meta name="twitter:site" content="@NM_Fitness">
    <meta name="twitter:title" content="Nick Morrison Fitness / <?php the_title(); ?>">
    <meta name="twitter:creator" content="@NM_Fitness">
    <?php
        $a_id = get_field('background');
        $twitter_image = wp_get_attachment_image_src( $a_id, 'large'); 
    ?>
    <meta name="twitter:image" content="<?php echo $twitter_image[0]; ?>">

    <!-- Open Graph data -->
    <meta property="og:title" content="Nick Morrison Fitness / <?php the_title(); ?>" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="http://www.example.com/" />
    <meta property="og:image" content="http://example.com/image.jpg" />
    <meta property="og:description" content="Description Here" /> 
    <meta property="og:site_name" content="Nick Morrison Fitness" />
    <meta property="fb:admins" content="Facebook numeric ID" />
 
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
 
  <div class="preloader">
    <h1 class="skew">NMF</h1>
    <div class="outer">
        <div class="inner-box">&nspb;</div>
    </div>
  </div>
   
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header" role="banner">
        <ul class="mini-menu">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <div class='inner'>
            <nav id="site-navigation" class="navigation-main" role="navigation">
                <?php  
                    wp_nav_menu( array(
                        'walker' => new My_Walker()
                    )); 
                ?>
            </nav><!-- #site-navigation -->
        </div>
	</header><!-- #masthead --> 

  
  <article id="content" class="site-content" role="main" >