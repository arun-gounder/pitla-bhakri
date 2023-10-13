import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="flex items-center gap-3">
            <button onClick={()=>setCount(prev => prev - 1)} className="flex justify-center items-center bg-transparent text-[#FF6A00] font-semibold h-[25px] w-[25px] border border-[#FF6A00] rounded-full">
                -
            </button>
            <span className='font-semibold'>{count}</span>
            <button onClick={()=>setCount(prev => prev + 1)} className="flex justify-center items-center bg-transparent text-[#FF6A00] font-semibold h-[25px] w-[25px] border border-[#FF6A00] rounded-full">
                +
            </button>
        </div>
    )
}

export default Counter