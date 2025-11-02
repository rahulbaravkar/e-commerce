import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";


const HomeSectionCarosel = () => {


  const[activeIndex , setActiveIndex] = useState(0);


const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 5.5 },
};

const slidePrev = () => setActiveIndex(activeIndex - 1)
const slideNext = () => setActiveIndex(activeIndex + 1)

const syncActiveIndex = ({item}) => setActiveIndex(item)

const items =[1,1,1,1,1].map((item)=><HomeSectionCard/>)

  return (
    <div className=" border">
      <div className="relative p-5 ">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          disableButtonsControls
          infinite
          disableDotsControls
        
        />

        <Button
          variant="contained"
          activeIndex={activeIndex}
          className="z-50"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "gray",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>

        <Button
          onClick={slidePrev}
          activeIndex={activeIndex}
          variant="contained"
          className="z-50 bg-white "
          sx={{
            position: "absolute",
            top: "8rem",
            left: "-4rem",
            transform: "translateX(50%) rotate(-90deg)",
            bgcolor: "gray",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;



