import React from 'react';
import { IoIosReturnRight } from "react-icons/io";
function Button({title="Get Started"}){
    return (
        <button className='min-w-35 px-3 py-2 bg-zinc-100 text-black rounded-full text-left flex items-center justify-between '>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
      </button>
    )
    }

export default Button;