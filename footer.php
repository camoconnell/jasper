<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package JaSper
 */
?>
 
</article><!-- #content -->

<footer id="colophon" class="site-footer tAll" role="contentinfo">

    <div>
        <h1 class="contact tAll">
            <?php the_field('contact-title', getIdFromSlug('home')); ?>
        </h1>
    </div>
    <div class="footer-top">
        
        <!-- Inline Svg : Repeat Waves color transformed using css -->
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 width="100%" height="8px"  enable-background="new 0 0 53 8" xml:space="preserve">
            <defs>
                <pattern id="waves" patternUnits="userSpaceOnUse" x="15" y="0" width="53px" height="8px" viewBox="0 0 53 8" >
                     <g>
                        <path d="M0,9V2.499c6.625,0,6.625,4.669,13.249,4.669c6.622,0,6.622-4.669,13.245-4.669c6.626,0,6.626,4.669,13.253,4.669
                S46.374,2.499,53,2.499V9H0z"/>
                    </g>
                </pattern>
            </defs>

            <rect x="0" y="0" width="100%" height="100%" fill="url(#waves)" />
        </svg>
        
    </div>
    <div class="footer-content tBackgroundColor"> 
        <p><?php the_field('contact-blurb', getIdFromSlug('home')); ?></p>
        <?php echo do_shortcode( '[contact-form-7 id="4" title="Contact form 1"]' ); ?>
        
        
       <!--  <p class="copyright">&copy; Nick Morrison Fitness, All Rights Reserved.</p> -->
    </div><!-- .site-info -->
    
    
    
    
</footer><!-- #colophon -->

<?php wp_footer(); ?>

</body>
</html>