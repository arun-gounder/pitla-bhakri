"use client"

import Image from 'next/image'
import React from 'react'
import MobileIcon from '../assets/mobile.png'
import Flag from '../assets/flag.png'
import Back from '../assets/backicon.png'
import Link from 'next/link'


const Mobile = () => {
  return (
    <div className='h-screen flex justify-center items-end w-full  bg-black/25'>
      <div className="flex flex-col justify-between bg-white h-[50%] w-screen px-4 py-5 rounded-t-3xl">
        <div className="w-full flex justify-start items-start gap-3 mb-3">
            <Link className='text-lg' href={"/order"}>
              <Image src={Back} alt="Back" />
            </Link>
          <h2 className="text-2xl font-semibold ">Kindly enter your mobile number</h2>
        </div>

        <div className="relative w-full flex flex-col gap-2 justify-center items-center">
          <Image
            className='absolute top-[-100%] right-0'
            src={MobileIcon}
            quality={100}
            placeholder='blur'
            alt='Mobile'
          />
          <div className="flex justify-center items-center w-full border-solid gap-2 border-2 p-1 border-gray-300 rounded-md">
            <Image
              src={Flag}
              quality={100}
              placeholder='blur'
              width={35}
              height={30}
              alt='Flag'
            />
            <span className=''>|</span>
            <input className='w-full p-2 focus:border-none focus:outline-none' placeholder='Enter Phone Number' type="text" />
          </div>
          <Link href={"/otp"}
            className="w-[60%] rounded-md bg-[#FF6A00] px-2 py-3 text-center text-[16px] text-white hover:bg-[#fa7c21] mt-3">Send OTP
          </Link>
        </div>

        <div className="text-center text-[12px] text-gray-400">
          <p>By continuing, you agree to our <br />
            Terms of Servacy Privacy Policy Contenent Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Mobile