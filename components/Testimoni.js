import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/image";
import Stars from "../public/assets/Icon/stars.svg";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";

const Testimoni = ({
  listTestimoni = [
    {
      name: "Aisha Khan",
      image: "/assets/people-2.png",
      city: "Karachi",
      country: "Pakistan",
      rating: "4.5",
      testimoni:
        `I’ve been using Affotax Bookkeeping Services for my bookkeeping needs for the past year, and I couldn’t be happier. Their attention to detail and professionalism have helped me stay on top of my finances effortlessly. Highly recommend their services to anyone looking for reliable bookkeeping in Pakistan!`,
    },
    {
      name: "Ahmed Malik",
      image: "/assets/people-3.png",
      city: "Lahore",
      country: "Pakistan",
      rating: "4.5",
      testimoni:
       `Exceptional service! The team at Affotax Bookkeeping Services is knowledgeable and thorough. They’ve helped streamline our financial processes, and their prompt support has been invaluable. It’s a relief to have such a trustworthy partner handling our bookkeeping."`
    },
    {
      name: "John Smith",
      image: "/assets/people-1.png",
      city: "New York",
      country: "USA",
      rating: "4.4",
      testimoni:
        `I’ve worked with several bookkeeping firms around the world, and Affotax Bookkeeping Services stands out for their professionalism and reliability. Their team provided exceptional support and handled my financial records with great precision. I highly recommend them for any international bookkeeping needs`
    },
    {
      name: "David Lee",
      image: "/assets/people-4.png",
      city: "Sydney",
      country: "Australia",
      rating: "4.5",
      testimoni:
        `I was initially hesitant to engage with a firm based overseas, but Affotax Bookkeeping Services exceeded all my expectations. Their detailed reports and clear communication have made managing my business finances from afar much easier. They truly deliver on their promises.`
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex items-stretch justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-blue-500 transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 xl:order-1  ">
                  <Image
                    src={listTestimonis.image}
                    height={50}
                    width={50}
                    alt="Icon People"
                    className="rounded-full "
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm text-black-500 capitalize">
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <p className="text-sm">{listTestimonis.rating}</p>
                  <span className="flex ml-4">
                    <Stars className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <p className="mt-5 text-left">“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-blue-500 border hover:bg-blue-500 hover:text-white-500 transition-all text-blue-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
