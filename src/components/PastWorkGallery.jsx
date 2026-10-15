import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryImages = [
  "https://curtains.saleskarta.com/assets/past-work-1.jpg",
  "https://curtains.saleskarta.com/assets/past-work-2.jpg",
  "https://curtains.saleskarta.com/assets/past-work-3.jpg",
  "https://curtains.saleskarta.com/assets/past-work-4.jpg",
  "https://curtains.saleskarta.com/assets/past-work-5.jpg"
];

export default function PastWorkGallery() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4">Our Recent Work</h2>
        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">Browse our recent installations across Melbourne, showcasing bespoke sheer drops and smart blockout solutions.</p>
      </div>
      
      <div className="max-w-[100vw] px-4 sm:px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            1024: { slidesPerView: 2.5 }
          }}
          className="pb-16"
        >
          {galleryImages.map((src, idx) => (
            <SwiperSlide key={idx} className="transition-transform duration-500">
              {({ isActive }) => (
                <div className={`overflow-hidden rounded-3xl transition-all duration-500 border-4 ${isActive ? 'scale-100 shadow-2xl opacity-100 border-white' : 'scale-90 shadow-none opacity-50 border-transparent'}`}>
                  <img src={src} alt="Curtains Direct Past Installation" className="w-full h-[400px] sm:h-[500px] object-cover" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
