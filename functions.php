<?php
/**
 * jasper functions and definitions
 *
 * @package JaSper
 */


if ( ! function_exists( 'JaSper_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function JaSper_setup() {

    /* Check for any mobile device */
    require_once(TEMPLATEPATH . '/inc/Mobile-Detect.php');

    /* utility functions used sitewide */
    require_once(TEMPLATEPATH . '/inc/JaSper-utils.php');

    /* captures all ajax calls */
    require_once(TEMPLATEPATH . '/inc/JaSper-ajax.php');



	/**
	 * This theme uses wp_nav_menu() in one location.
	 */
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'JaSper' ),
	) );

}
endif; // JaSper_setup
add_action( 'after_setup_theme', 'JaSper_setup' );



remove_action( 'wp_head', 'feed_links_extra', 3 ); // Display the links to the extra feeds such as category feeds
remove_action( 'wp_head', 'feed_links', 2 ); // Display the links to the general feeds: Post and Comment Feed
remove_action( 'wp_head', 'rsd_link' ); // Display the link to the Really Simple Discovery service endpoint, EditURI link
remove_action( 'wp_head', 'wlwmanifest_link' ); // Display the link to the Windows Live Writer manifest file.
remove_action( 'wp_head', 'index_rel_link' ); // index link
remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 ); // prev link
remove_action( 'wp_head', 'start_post_rel_link', 10, 0 ); // start link
remove_action( 'wp_head', 'adjacent_posts_rel_link', 10, 0 ); // Display relational links for the posts adjacent to the current post.
remove_action( 'wp_head', 'wp_generator' ); // Display the XHTML generator that is generated on the wp_head hook, WP ver
/*
 * Functions:   Optimize Contact Form 7
 *
 */

function deregister_ct7_styles() {
    wp_deregister_style( 'contact-form-7' );
}
add_action( 'wp_print_styles', 'deregister_ct7_styles', 100 );




/**
 * Enqueue scripts and styles
 */
function JaSper_scripts() {

    global $post;

    // Mobile detection, using http://mobiledetect.net/
    global $detect;

    $isDevice = ( $detect->isMobile() ) ? 1 : 0;
    $isMobile = ( $detect->isMobile() && !$detect->isTablet() ) ? 1 : 0;
    $isTablet = ( $detect->isTablet() ) ? 1 : 0;

    // Live or local environment.
    global $dev_environment;
	$dev_environment = 'Local';
    $dest = '/js/require.js';

    wp_deregister_script('jquery');
    wp_enqueue_script( 'require-js', get_bloginfo('template_url').$dest, false , '20120206', true );
	wp_enqueue_style( 'JaSper-style', get_stylesheet_uri() );


    if( is_singular() )
        error_log('single',0);
    else
        error_log('not single',0);


    $slug = get_post( $post )->post_name;

    // Localize js vars
    $args = array(
        'BOOTSTRAP_DATA'    => json_encode(array(
                'pageId'        => get_page_id( $post ),
                'slug'          => $slug,
                'homeId'        => get_option('page_on_front'),
                'sayhiSlug'     => 'say-hi',
                'numOfPosts'    => get_option('posts_per_page ')
            )
        ),
        'THEME_URL' 		=> get_bloginfo('template_url'),
        'URL' 				=> get_bloginfo('url'),
        'ENVIRONMENT'       => $dev_environment,
        'AJAX_URL' 			=> admin_url( 'admin-ajax.php'),
        'NONCE'          	=> wp_create_nonce( 'ajax_custom_nonce' ),
        'DEVICE'			=> $isDevice,
        'MOBILE'			=> $isMobile,
        'TABLET'			=> $isTablet
    );

    wp_localize_script( 'require-js' , 'WP',  $args );
}
add_action( 'wp_enqueue_scripts', 'JaSper_scripts' );


// if id is a child, return parent id
function get_page_id( $post ) {

    if ($post->post_parent != 0)
        $id = $post->post_parent;
    else
        $id = $post->ID;

    return $id;
}


function json_api_encode_acf($response)
{
    if (isset($response['pages'])) {
        foreach ($response['pages'] as $post) {
            json_api_add_acf($post); // Add specs to each post
        }
    }
    else if (isset($response['pages'])) {
        json_api_add_acf($response['pages']); // Add a specs property
    }



    if (isset($response['posts'])) {
        foreach ($response['posts'] as $post) {
            json_api_add_acf($post); // Add specs to each post
        }
    }
    else if (isset($response['post'])) {
        json_api_add_acf($response['post']); // Add a specs property
    }

    return $response;
}

function json_api_add_acf(&$post)
{
    $post->acf = get_fields($post->id);
}

add_filter('json_api_encode', 'json_api_encode_acf');








// Add a custom all attachments
add_filter('json_api_encode', 'json_api_encode_attachments');

function json_api_encode_attachments($response) {
      if (isset($response['pages'])) {
        foreach ($response['pages'] as $post) {
            json_api_add_attachment_obj($post); // Add specs to each post
        }
    }
    else if (isset($response['pages'])) {
        json_api_add_attachment_obj($response['pages']); // Add a specs property
    }



    if (isset($response['posts'])) {
        foreach ($response['posts'] as $post) {
            json_api_add_attachment_obj($post); // Add specs to each post
        }
    }
    else if (isset($response['post'])) {
        json_api_add_attachment_obj($response['post']); // Add a specs property
    }

    return $response;
}

function json_api_add_attachment_obj(&$post)
{
    $post->attachments = array(
        'large'   => wp_get_attachment_image_src( get_field('background', $post->id),'large' ),
        'medium'  => wp_get_attachment_image_src( get_field('background', $post->id),'medium' ),
        'full'    => wp_get_attachment_image_src( get_field('background', $post->id),'full' )
    );
}


function remove_wpcf7_stylesheet() {
    remove_action( 'wp_head', 'wpcf7_wp_head' );
}
add_action( 'init' , 'remove_wpcf7_stylesheet' );



function detect_mobile() {
	global $detect;
	$detect = new Mobile_Detect();
}

add_action('init','detect_mobile', 2);





function add_require_path( $url )
{
    global $dev_environment;

    if ( FALSE === strpos( $url, 'require' ))
    { // not our file
        return $url;
    }


    // if live $dev_environment don't run function
    if( $dev_environment === 'Local' )
    {
        // Dev unoptimized
        return "$url' data-main='".get_bloginfo('template_url')."/js/build/app/loader";
    } else {
        // Live optimized
        return "$url' data-main='".get_bloginfo('template_url')."/js/jasper";
    }
}
add_filter( 'clean_url', 'add_require_path', 11, 1 );


// nav menu walker - add data-slug & data-id attributes
class My_Walker extends Walker_Nav_Menu
{
    function start_el(&$output, $item, $depth, $args) {
        global $wp_query;
        // Live or local environment.
        global $dev_environment;
        $dev_environment = 'Local';
        $dest = $dev_environment === 'Live' ? 'nickmorrisonfitness.com' : '';

        $slug = esc_attr(  basename(get_permalink($item->object_id )) );
        if( $slug === 'wp' || $slug === $dest ||  $slug === 'localhost:8888')
        {
            $slug = 'home';
        }

        $indent = ( $depth ) ? str_repeat( "\t", $depth ) : '';

        $class_names = $value = '';

        $classes = empty( $item->classes ) ? array() : (array) $item->classes;

        $class_names = join( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) );
        $class_names = ' class="' . esc_attr( $class_names ) . '"';

        $output .= $indent . '<li id="menu-item-'. $slug . '"' . $value . $class_names .'>';

        $attributes  = ! empty( $item->attr_title ) ? ' title="'  . esc_attr( $item->attr_title ) .'"' : '';
        $attributes .= ! empty( $item->target )     ? ' target="' . esc_attr( $item->target     ) .'"' : '';
        $attributes .= ! empty( $item->xfn )        ? ' rel="'    . esc_attr( $item->xfn        ) .'"' : '';
        $attributes .= ! empty( $item->url )        ? ' href="'   . esc_attr( $item->url        ) .'"' : '';
        $attributes .= ' data-pageId="'. esc_attr( $item->object_id        ) .'"';
        $attributes .= ' data-slug="'. $slug .'"';

        $item_output = $args->before;
        $item_output .= '<a'. $attributes .'><div class="icon-'.$slug.'-wrap"></div><h5>';
        $item_output .= $args->link_before . apply_filters( 'the_title', $item->title, $item->ID ) . $args->link_after;
        $item_output .= '</h5></a>'; /* This is where I changed things. */
        $item_output .= $args->after;

        $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
    }
}