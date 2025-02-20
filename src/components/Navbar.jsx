import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
     <div className="nleft flex items-center ">
     <img
        src="https://assets.website-files.com/60b55f423fe7f4b60b1ff43b/60b55f423fe7f4634b1ff4af_Refokus%20Logo.svg"
        alt=""
      />
      <div className="links flex gap-14 ml-20">
        {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
          elem.length === 0 ? (
            <span className="w-[1px] h-6  bg-zinc-500"></span>
          ) : (
            <a className="text-sm flex items-center gap-1" key={elem} href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0 0.45em 2px  #00FF19" }}
                  className="inline-block w-1 h-1 rounded-full bg-green-500"
                ></span>
              )}
              {elem}
            </a>
          )
        )}
      </div>
     </div>
     <div>
        <Button />
     </div>
    </div>
  );
}
export default Navbar;
