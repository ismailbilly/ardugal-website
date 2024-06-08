import React from "react";

const Button = ({backgroundColor="secondary", fontType="montserrat", children}) => {
  return (
    // <button
    //   className="bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400
    // duration-500"
    // >
    //   {props.children}
    // </button>
    <button
      className={`rounded-full
              py-3 px-6  bg-${backgroundColor} font-${fontType} text-white sm:text-2xl text-xl`}
    >
      {children}
    </button>
  );
};

export default Button;
