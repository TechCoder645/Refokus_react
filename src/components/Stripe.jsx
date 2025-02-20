import React from 'react';

function Stripe({ val }) {
    return (
        <div className="min-w-[20em] px-7 py-5 border-t-[1px] border-b-[1px] border-r-[1px] border-zinc-600 flex items-center justify-between ">
        <img className="h-6" src={val.url} alt="" />
        <span className="font-semibold text-lg">{val.number}</span>
      </div>
    )
}

export default Stripe;