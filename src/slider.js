.productSlider .swiper-pagination-bullet {
    background: #23262f;
  }
  
  .productSlider .swiper-button-prev,
  .productSlider .swiper-button-next {
    background: #23262f;
    box-shadow: 0px 4px 10px rgba(15, 27, 51, 0.1);
    top: 97%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 20;
  }
  
  .productSlider .swiper-button-prev:hover,
  .productSlider .swiper-button-next:hover,
  .testimonialSlider .swiper-button-prev:hover,
  .testimonialSlider .swiper-button-next:hover {
    background: #286f6c;
    transition: all 0.25s ease-in-out;
  }
  
  .productSlider .swiper-button-prev {
    left: 40%;
  }
  .productSlider .swiper-button-next {
    right: 40%;
  }
  
  .productSlider .swiper-button-prev:after,
  .productSlider .swiper-button-next:after,
  .testimonialSlider .swiper-button-prev:after,
  .testimonialSlider .swiper-button-next:after {
    font-size: 16px;
    color: white;
  }
  
  .productSlider .swiper-pagination {
    bottom: 20px;
  }
  
  .testimonialSlider .swiper-button-prev,
  .testimonialSlider .swiper-button-next {
    background: #23262f;
    box-shadow: 0px 4px 10px rgba(15, 27, 51, 0.1);
    top: 85%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 20;
  }
  
  .testimonialSlider .swiper-button-prev {
    left: 0;
  }
  
  .testimonialSlider .swiper-button-next {
    left: 12%;
  }
  
  @media (max-width: 768px) {
    .productSlider .swiper-button-prev,
    .productSlider .swiper-button-next,
    .productSlider .swiper-pagination,
    .testimonialSlider .swiper-button-prev,
    .testimonialSlider .swiper-button-next {
      display: none;
    }
  }