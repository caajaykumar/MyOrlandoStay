'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './slider.module.css'; // Assuming you will adjust this if needed.

export default function MainSlider({ className = '' }) {
  return (
    <section className={`${className} ${styles.sliderSection}`} style={{ width: '100%', padding: 0, margin: 0 }}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={0}
        style={{ width: '100%' }}
      >
        {[
          '/img/home-slider/slider-1.jpg',
          '/img/home-slider/slider-2.jpg',
          '/img/home-slider/slider-10.jpg',
          '/img/home-slider/slider-11.jpg',
          
          '/img/home-slider/slider-5.jpg',
          '/img/home-slider/slider-6.jpg',
          '/img/home-slider/slider-9.jpg',
        ].map((src, index) => (
          <SwiperSlide key={index} style={{ width: '100%' }}>
            <div style={{ width: '100%', position: 'relative', height: '700px' }}>
              <Image
                src={src}
                alt={`Room ${index + 1}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
