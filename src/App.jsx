import { useState } from "react";
import "./App.css";
import Slider from "./components/Slider";
import Toolbar from "./components/Toolbar";
import Indicators from "./components/Indicators";
import ill0 from "./assets/ill-0.svg";
import ill1 from "./assets/ill-1.svg";
import ill2 from "./assets/ill-2.svg";
import ill3 from "./assets/ill-3.svg";
import ill4 from "./assets/ill-4.svg";
function App() {
  const [currSlider, setCurrSlider] = useState(1);
  const slidersData = [
    {
      id: 1,
      heading: "Welcome Back Shaheer!, Let's get you going.",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis adipisci ex consequatur at.",
      buttonText: "Next",
      color: "#C4DFDF",
      illustration: ill1,
    },
    {
      id: 2,
      heading: "Get A business idea",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis adipisci ex consequatur at.",
      buttonText: "Explore ideas",
      color: "#CBB279",
      illustration: ill2,
    },
    {
      id: 3,
      heading: "Build a website",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis adipisci ex consequatur at.",
      buttonText: "Check No-code website builders",
      color: "#D4ADFC",
      illustration: ill4,
    },
    {
      id: 4,
      heading: "Purchase domain & hosting",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis adipisci ex consequatur at.",
      buttonText: "Check cheapest domain & hosting",
      color: "#FEFF86",
      illustration: ill3,
    },
    {
      id: 5,
      heading: "Onboard your business",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui perspiciatis adipisci ex consequatur at.",
      buttonText: "Finish",
      color: "#AFD3E2",
      illustration: ill0,
    },
  ];
  const slideNext = () => {
    if (currSlider === 5) {
      setCurrSlider(1);
    } else {
      setCurrSlider(() => currSlider + 1);
    }
  };
  const slidePrev = () => {
    if (currSlider === 1) {
      setCurrSlider(slidersData.length);
    } else {
      setCurrSlider(() => currSlider - 1);
    }
  };
  return (
    <div className='App'>
      <div className='py-10 max-w-5xl m-auto'>
        {slidersData.map((slider, i) => {
          return (
            <Slider
              key={i}
              isShowing={currSlider === slider.id ? true : false}
              {...slider}
            />
          );
        })}
        <Indicators
          currSlider={currSlider}
          size={slidersData.length}
          setCurrSlider={setCurrSlider}
        />
        <Toolbar slideNext={slideNext} slidePrev={slidePrev} />
      </div>
    </div>
  );
}

export default App;
