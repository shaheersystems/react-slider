import React from "react";
function Slider({ heading, text, buttonText, color, isShowing, illustration }) {
  return (
    <div
      className={`${
        isShowing ? "flex" : "hidden"
      } relative min-h-[100px] w-full rounded-xl shadow px-8 py-10 flex-col gap-5`}
      style={{ background: color }}
    >
      <h1 className='text-4xl text-bold font-serif'>{heading}</h1>
      <p>{text}</p>
      <div>
        <button className='flex items-center gap-3 bg-black text-white py-1 px-5 rounded-full'>
          <span className='font-semibold'>{buttonText}</span>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
      <div className='absolute top-10 right-10'>
        <img src={illustration} className='h-36' alt='' />
      </div>
    </div>
  );
}

export default Slider;
