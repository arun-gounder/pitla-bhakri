"use client"

import Image from 'next/image';
import React from 'react'
import Bhakari from './assets/bhakariicon.png'
import Pitla from './assets/pitlaicon.png'
import Pitlaicon from './assets/pitlaicon1.png'
import Thecha from './assets/thechaicon.png'
import Onion from './assets/onionicon.png'
import Pitlabhakari from './assets/pitlabhakariimage.jpg'
import Link from 'next/link';



function Home() {

  return (
    <div className={`flex flex-col justify-between border-black`}>
      <div className="flex items-center justify-between px-3 py-2">
        <h2 className="text-[24px] text-[#FF6A00]">Pitla <span className="text-black">Bhakri</span></h2>
        <div className="flex gap-2 justify-center items-center">
          <p className='font-semibold'>मराठी</p>
          <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-green-500 text-white">0</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 bg-[#F1F1F1] p-4 rounded-lg">
        <div className="relative flex h-[85px] w-full items-center justify-start gap-3 rounded-lg bg-white p-2">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full shadow-md ring-1 ring-gray-200">
            <Image src={Pitlaicon} alt="Pitlaicon" />
          </div>
          <div>
            <p className="font-semibold">Your order is being prepared</p>
            <p className="text-[12px] font-semibold">Status : Preparing</p>
          </div>
          <div className="absolute bottom-[10px] right-[10px]">
            <button className="rounded-md bg-[#FFB62A] px-3 py-[5px] text-[12px]">modify</button>
          </div>
        </div>

        <div className="bg-white rounded-lg">
          <div className="h-auto w-full rounded-lg">
            <Image
              placeholder={'blur'}
              src={Pitlabhakari}
              quality={100}
              alt="pithla Bhakri" />
          </div>

          <div className="mt-4 p-3">
            <h2 className="text-[25px] font-semibold mb-2">The Complete Meal</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laboriosam aperiam ullam consectetur, reprehenderit eos asperiores quasi.</p>

            <h3 className="font-semibold text-[20px] mt-2">Content</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 font-semibold">
              <div className="flex gap-2">
                <Image
                  placeholder={'blur'}
                  src={Bhakari}
                  quality={100}
                  alt='Bhakari'
                />
                Bhakari x 2
              </div>
              <div className="flex gap-2">
                <Image
                  placeholder={'blur'}
                  src={Thecha}
                  quality={100}
                  alt='Thecha'
                />
                Thecha
              </div>
              <div className="flex gap-2">
                <Image
                  placeholder={'blur'}
                  src={Pitla}
                  quality={100}
                  alt='Pitla'
                />
                Pithla (For 1)
              </div>
              <div className="flex gap-2">
                <Image
                  placeholder={'blur'}
                  src={Onion}
                  quality={100}
                  alt='Onion'
                />
                Onion
              </div>
            </div>

            <p className="text-sm mt-5">Price</p>
            <h3 className="text-2xl font-semibold">₹150</h3>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-white px-4 py-2">
        <Link href={"/order"}
          className="w-full rounded-md bg-[#FF6A00] px-2 py-4 text-center text-[16px] text-white hover:bg-[#fa7c21]">Order now
        </Link>
      </div>
    </div>
  )
}

export default Home;



