import Image from 'next/image'
import React from 'react'
import Online from '../assets/onlinepay.png'
import Cash from '../assets/cashpay.png'
import Back from '../assets/backicon.png'
import Link from 'next/link'



const Mode = () => {
  return (
    <div className='h-screen flex justify-center items-end w-full bg-black/25'>
      <div className="flex flex-col justify-between bg-white h-[50%] w-screen py-5 px-4 rounded-t-3xl">
        <div className="w-full flex justify-start items-start gap-3 mb-3">
          <Link className='text-lg' href={"/info"}>
            <Image src={Back} alt="Back" />
          </Link>
          <h2 className="text-2xl font-semibold ">Please select mode of payment</h2>
        </div>

        <div className="w-full flex flex-1 gap-2 justify-evenly items-center">
          <div className='p-1 flex flex-col justify-center items-center h-[150px] border-2 border-gray-300 rounded-md hover:border-2 hover:border-orange-500'>
            <Image
              src={Online}
              quality={100}
              placeholder='blur'
              alt='Online'
            />
            <p>Online Payment</p>
          </div>
          <div className='p-1 flex flex-col justify-center items-center h-[150px] border-2 border-gray-300 rounded-md hover:border-2 hover:border-orange-500'>
            <Image
              src={Cash}
              quality={100}
              placeholder='blur'
              alt='Cash'
            />
            <p>Cash on delivery</p>
          </div>
        </div>

        <div className="text-center text-[12px] text-gray-400">
          <button className="w-[60%] rounded-md bg-[#FF6A00] px-2 py-3 text-center text-[16px] text-white hover:bg-[#fa7c21] mt-3">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Mode