# MAgallery
Basic responsive photo gallery based on bootstrap grid system.
The Easiest and the Fastest to use gallery to use in your website.
include the following css files in the head of the page:

	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="http://fontawesome.io/assets/font-awesome/css/font-awesome.css">
	<link rel="stylesheet" href="css/MAgallery.min.css">

and include the following JS files:

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/MAgallery.min.js"></script>

then use :

	<ul id="myGallery" class="gallery col-xs-12">
	<li class="col-xs-6 col-sm-3"><span><img src="" class="img-responsive"></span></li>
	</ul>

Finally initialize the gallery when the window loaded using the following script.

	<script type="text/javascript">
	    		MAgallery("myGallery");
	</script>

don't forget to use bootstrap classes to define the main columns of the gallery.

Current Version 1.0.0

you can check the demo to know how to use.
