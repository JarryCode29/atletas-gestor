'use client'
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import { images } from "@/app/lib/images"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const Slider = () => {
    return (
        <section className='py-12 lg:w-full'>
          <div className='container lg:w-full'>
            <Swiper
              navigation
              pagination={{ type: 'fraction' }}
              modules={[Navigation, Pagination]}
              onSwiper={swiper => console.log(swiper)}
              className='h-96 w-full rounded-lg'
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className='flex h-full w-full items-center justify-center'>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className='block h-full w-full object-cover'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )
}
