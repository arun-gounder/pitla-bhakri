"use client"

import React from 'react'
import Image from 'next/image'
import Otpicon from '../assets/otpverify.png'
import Back from '../assets/backicon.png'
import Link from 'next/link'


const Otp = () => {
  return (
    <div className='h-screen flex justify-center items-end w-full bg-black/25'>
      <div className="flex flex-col justify-between bg-white h-[50%] w-screen px-4 py-5 rounded-t-3xl">
        <div className="w-full flex justify-start items-start gap-3">
          <Link className='text-lg' href={"/mobile"}>
            <Image src={Back} alt="Back" />
          </Link>
          <h2 className="text-2xl font-semibold ">Please enter your otp</h2>
        </div>

        <div className="w-full flex flex-col gap-3 justify-center items-center">
          <Image
            src={Otpicon}
            quality={100}
            placeholder='blur'
            alt='Mobile'
          />
          <div className='w-full flex justify-center gap-2'>
            <input className='p-2 border-2 h-[40px] w-[40px] rounded-md text-center border-gray-400' maxLength={1} placeholder='*' type="number" />
            <input className='p-2 border-2 h-[40px] w-[40px] rounded-md text-center border-gray-400' maxLength={1} placeholder='*' type="number" />
            <input className='p-2 border-2 h-[40px] w-[40px] rounded-md text-center border-gray-400' maxLength={1} placeholder='*' type="number" />
            <input className='p-2 border-2 h-[40px] w-[40px] rounded-md text-center border-gray-400' maxLength={1} placeholder='*' type="number" />
          </div>
          <p className='text-gray-400 cursor-pointer'>Resend</p>

          <Link href={"/info"} className="w-[60%] rounded-md bg-[#FF6A00] px-2 py-3 text-center text-[16px] text-white hover:bg-[#fa7c21]">Verify OTP</Link>
        </div>

        <div className="text-center text-[12px] text-gray-400">
          <p>By continuing, you agree to our <br />
            Terms of Servacy Privacy Policy Contenent Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Otp