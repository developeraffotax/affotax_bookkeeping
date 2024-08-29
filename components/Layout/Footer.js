import React from "react";
import LogoVPN from "../../public/assets/logo.PNG";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";


const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start gap-4 ">
        <Image src={LogoVPN} className="drop-shadow-md cursor-pointer  " height={50} width={150}/>
          <p className="mb-4">
            <strong className="font-medium">Affotax Bookkeeping Services</strong>  is a reliable bookkeeping firm that specialises in providing affordable bookkeeping services to PK businesses.
          </p>
          {/* <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div> */}
          <p className="text-gray-400">©{new Date().getFullYear()} - Affotax Bookkkeeping Services</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Menu</p>




          <ul className="text-black-500 flex flex-col  ">



          <LinkScroll activeClass="active" to="hero" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > Home </LinkScroll>
          <LinkScroll activeClass="active" to="pricing" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > Pricing </LinkScroll>
          <LinkScroll activeClass="active" to="about" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > About Us </LinkScroll>
          <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > Contact Us </LinkScroll>




            
          </ul>
        </div>
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              LaslesVPN ?{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div> */}
        {/* <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Earn Money</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Affiliate{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div> */}
      </div>


      {/* <footer className="mt-10 text-center">
        <p className="text-gray-600">&copy; 2024 Our Company. All rights reserved.</p>
      </footer> */}


    </div>
  );
};

export default Footer;
