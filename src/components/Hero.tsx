import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { HashLink } from 'react-router-hash-link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Hero() {
    const slides = [
        {
            image: "/images/hero/slider-1.jpg",
            title: "Discover Your Natural Beauty",
            desc: "Join us on a journey to radiant, healthy skin.",
            button: "See More",
            link: "/about",
        },
        {
            image: "/images/hero/slider-2.jpg",
            title: "Glow from Within",
            desc: "Nourish your skin with our natural care products.",
            button: "Explore Products",
            link: "/products#product",
        },
        {
            image: "/images/hero/slider-3.jpg",
            title: "Beauty, Perfected",
            desc: "Experience the magic of professional makeup artistry.",
            button: "Book Now",
            link: "/about#beauty",
        }
    ];

    return (
        <div className="w-full h-screen">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                navigation={true}
                resizeObserver={false}
                className="w-full h-full min-h-0"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img src={slide.image} alt={`slide${i + 1}`} className="w-full h-full object-cover" />
                            <div className="bg-black/40 dark:bg-black/60 absolute inset-0 flex items-end justify-start px-4 py-6 md:px-10 md:py-10">
                                <div className="ms-10 text-white dark:text-gray-200 max-w-lg mb-10">
                                    <h1 className="text-3xl md:text-5xl sm:text-5xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-lg mb-4">{slide.desc}</p>

                                    {slide.link ? (
                                        <HashLink to={slide.link} smooth>
                                            <button className="bg-pink-500 hover:bg-pink-600 text-white dark:text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                                                {slide.button}
                                            </button>
                                        </HashLink>
                                    ) : (
                                        <button className="bg-pink-500 hover:bg-pink-600 text-white dark:text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                                            {slide.button}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}

export default Hero;
