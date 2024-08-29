import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Link as LinkScroll } from "react-scroll";






const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);







  return (
    <div
      className="bg-gradient-to-b from-white-500 to-white-300 w-full pt-24"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-6xl font-medium leading-relaxed bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md"
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Let's choose the package that is best for you and explore it happily
              and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Free Plan"
                  />
                </div>
                <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                  Basic Plan
                </p>
                <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Upto 200 Transactions

                  </li>
                  <li className="relative check custom-list my-2">
                  Bookkeeping

                  </li>
                  <li className="relative check custom-list my-2">
                  Bank Statement 

                  </li>
                  <li className="relative check custom-list my-2">
                  Bank reconciliation

                  </li>
                  
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <p className="text-2xl text-black-600 text-center mb-4 ">
                  Rs. 27,500 /mo
                  </p>

                  <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > <ButtonOutline>Inquire</ButtonOutline> </LinkScroll>


                  
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Standard Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Standard Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                  Upto 500 Transactions

                  </li>
                <li className="relative check custom-list my-2">
                Bookkeeping

                </li>
                <li className="relative check custom-list my-2">
                Bank Statement 

                </li>
                <li className="relative check custom-list my-2">
                Bank reconciliation

                </li>
                <li className="relative check custom-list my-2">
                Receipt management

                </li>
                
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                Rs. 55,500 /mo 
                </p>
                <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > <ButtonOutline>Inquire</ButtonOutline> </LinkScroll>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Premium Plan"
                />
              </div>
              <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
                Premium Plan{" "}
              </p>
              <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
              <li className="relative check custom-list my-2">
                  500+ Transactions

                  </li>
                <li className="relative check custom-list my-2">
                Bookkeeping

                </li>
                <li className="relative check custom-list my-2">
                Bank Statement 

                </li>
                <li className="relative check custom-list my-2">
                Bank reconciliation

                </li>
                <li className="relative check custom-list my-2">
                Receipt management

                </li>
                <li className="relative check custom-list my-2">
                Bills Management
                </li>
                
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <p className="text-2xl text-black-600 text-center mb-4 ">
                Rs. 83,500 /mo
                </p>

                <LinkScroll activeClass="active" to="contact" spy={true} smooth={true} duration={1000} className={ " cursor-pointer hover:text-blue-500" } > <ButtonOutline>Inquire</ButtonOutline> </LinkScroll>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        








                




















                {/* Testimonials */}
        <div className="flex flex-col w-full " id="testimonials">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Clients{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our clients who have joined us with great
              pleasure when using our services.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
