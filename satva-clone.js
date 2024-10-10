$(document).ready(function () {
    AOS.init();

    // first

    
    // $('#image-h2G9Lk83H-').attr('data-aos', 'fade-left');

    let image1 = $('#image-h2G9Lk83H- picture img').attr('src');
    $('#image-h2G9Lk83H- picture img').remove()
    $('#image-h2G9Lk83H- picture').append(
        `<img src="${image1}" alt="" style="" class="img-none img-border-none img-effects-none hl-optimized mw-100" loading="lazy" data-aos-duration="1000" data-aos="fade-right">`
    )

    // second

    
    // let image2 = $('#image-i9KMI2-mlE picture img').attr('src');
    // $('#image-i9KMI2-mlE picture img').remove()
    // $('#image-i9KMI2-mlE picture').append(
    //     `<img src="${image2}" alt="" style="" class="img-none img-border-none img-effects-none hl-optimized mw-100" loading="lazy" data-aos-duration="1000" data-aos="fade-right">`
    // )

    
    $('#image-i9KMI2-mlE').attr('data-aos', 'fade-left');

    let image3 = $('#image-jgdn2qCEyQ picture img').attr('src');
    $('#image-jgdn2qCEyQ picture img').remove()
    $('#image-jgdn2qCEyQ picture').append(
        `<img src="${image3}" alt="" style="" class="img-none img-border-none img-effects-none hl-optimized mw-100" loading="lazy" data-aos-duration="1000" data-aos="fade-right">`
    )

    $('#row-SOIuV8U199').attr('data-aos', 'fade-left');
    $('#row-dzUxyhNtqU').attr('data-aos', 'fade-left');
    $('#row-JnwUBtFuRF').attr('data-aos', 'fade-left');
    $('#row-t8HAeEoOCa').attr('data-aos', 'fade-left');
    $('#image-9XXb78QjeW').attr('data-aos', 'fade-left');
    
})
