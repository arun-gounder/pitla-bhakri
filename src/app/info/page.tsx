import React from 'react'
import Back from '../assets/backicon.png'
import Image from 'next/image'
import Link from 'next/link'



const Information = () => {
  return (
    <div className='h-screen flex justify-center items-end w-full  bg-black/25'>
      <div className="flex flex-col justify-between bg-white h-[50%] w-screen px-4 py-5 rounded-t-3xl">
        <div>
          <div className="flex justify-start items-start gap-3 mb-3">
            <Link className='text-lg' href={"/otp"}>
              <Image src={Back} alt="Back" />
            </Link>
            <h2 className="text-2xl font-semibold ">Please fill your information</h2>
          </div>

          <div className="w-full flex flex-col gap-2 justify-center mb-3 font-semibold">
            <div className="flex flex-col justify-center px-5 gap-2">
              <label htmlFor="">
                Name
                <input className="p-3 w-full border-solid border-2 border-gray-300 rounded-md" type="text" />
              </label>
              <label htmlFor="">
                City
                <select className="p-3 w-full border-solid border-2 border-gray-300 rounded-md" name="city" id="city">
                  <option value="--">-</option>
                  <option value="vashi">Vashi</option>
                  <option value="ghansoli">Ghansoli</option>
                  <option value="airoli">Airoli</option>
                  <option value="khoperkerne">Khoperkerne</option>
                </select>
              </label>
              <label>
                Address
                <input className="p-3 w-full border-solid border-2 border-gray-300 rounded-md" type="text" />
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div>
            <h2 className="text-center text-2xl font-semibold">Skip</h2>
          </div>
          <Link href={"/mode"}
            className="w-full rounded-md bg-[#FF6A00] px-2 py-4 text-center text-[16px] text-white hover:bg-[#fa7c21]">Pay Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Information