// Glider carousel
new Glider(document.querySelector('.announces-carousel'), {
    slidesToShow: 'auto',
    slidesToScroll: 1,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    draggable: true,
    rewind: true,
    responsive: [
        {
          // screens greater than >= 775px
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },{
          // screens greater than >= 1024px
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }, {
            breakpoint: 1440,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
      ]
  });