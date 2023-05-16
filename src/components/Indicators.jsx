import React, { useEffect, useState } from "react";

function Indicators({ currSlider, size, setCurrSlider }) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (size > 0) {
      setArray(Array(size).fill(0));
    }
  }, [size]);

  return (
    <div className='flex items-center justify-center px-4 py-5 gap-2'>
      {array.map((item, i) => {
        return (
          <div
            className={`h-2 w-2 rounded-full border cursor-pointer border-black ${
              currSlider === i + 1 ? "bg-black" : ""
            }`}
            key={item}
            onClick={() => setCurrSlider(i + 1)}
          ></div>
        );
      })}
    </div>
  );
}

export default Indicators;
