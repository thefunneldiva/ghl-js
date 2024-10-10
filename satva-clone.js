<script>
	$(document).ready(function () {
      	AOS.init();
      	let image1 = $('#image-h2G9Lk83H- picture img').attr('src');
      	$('#image-h2G9Lk83H- picture img').remove()
    	$('#image-h2G9Lk83H- picture').append(
        	`<img src="${image1}" alt="" style="" class="img-none img-border-none img-effects-none hl-optimized mw-100" loading="lazy" data-aos-duration="1000" data-aos="fade-right">`
        )
    })
</script>