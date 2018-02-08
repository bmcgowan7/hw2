// Your code goes here:
explodePic = function(event){jQuery("#main-image").attr("src",jQuery(this).attr('src'))};jQuery('img').on('click',explodePic)
