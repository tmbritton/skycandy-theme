<?php
$classes = $wpdb->get_results("
  SELECT meta_value FROM $wpdb->postmeta 
  WHERE post_id = $post->ID
  AND meta_key = 'sky_candy_classes_taught'
");
if ($classes) {
	?>
	<h3>Classes Taught</h3>
	<ul>
	<?php
	foreach($classes as $class) {
		$post_object = get_post( $class->meta_value );
		//$thumbnail = get_the_post_thumbnail( $class->meta_value, 'medium');
		$permalink = get_permalink( $post_object->ID ); ?>
				<li><a href="<?php echo $permalink; ?>"><?php echo $post_object->post_title; ?></a></li>
		<?php
	}
	echo '</ul>';	
}

?>