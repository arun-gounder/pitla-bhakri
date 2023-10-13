"use client"

import React from 'react'
import Onion from '../assets/onionicon.png'
import Pitla from '../assets/pitlaicon.png'
import Bhakari from '../assets/bhakariicon.png'
import Thecha from '../assets/thechaicon.png'
import Back from '../assets/backicon.png'
import Image from 'next/image'
import Counter from '../component/Counter'
import Link from 'next/link'


const Order = () => {

  return (
    <div className='h-screen flex justify-center items-end w-full bg-black/25'>
      <div className="flex flex-col justify-between bg-white h-[50%] w-screen px-4 py-5 rounded-t-3xl">
        <div>
          <div className="flex justify-start items-start gap-3 mb-3">
            <div className='text-lg flex justify-center items-center'>
              <Link href={"/"}>
                <Image src={Back} alt="Back" />
              </Link>
            </div>
            <h2 className="text-2xl font-semibold ">The Complete Meal</h2>
          </div>
          <div className="w-full flex justify-start mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibusi minus beatae amet eaque dolor.
          </div>

          <div className="w-full flex flex-col gap-2 justify-center mb-3 font-semibold">
            <div className="flex justify-between ">
              <div className="flex gap-2">
                <Image
                  placeholder={'blur'}
                  src={Bhakari}
                  quality={100}
                  alt='Bhakari'
                />
                Bhakari x 2
              </div>
              <Counter />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <Image
                  placeholder={'blur'}
                  src={Pitla}
                  quality={100}
                  alt='Pitla'
                />
                Pithla
              </div>
              <Counter />
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
                src={Onion}
                quality={100}
                alt='Onion'
              />
              Onion
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className='flex flex-col justify-center items-center'>
            <p className="text-xs text-slate-500">price</p>
            <h2 className="text-3xl font-semibold">₹150</h2>
          </div>
          <Link href={"/mobile"}>
            <button className="w-full rounded-md bg-[#FF6A00] px-2 py-4 text-center text-[16px] text-white hover:bg-[#fa7c21]">Pay Now</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Order