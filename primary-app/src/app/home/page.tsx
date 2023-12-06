import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';

//Icons area
// import Logo from './Logo';
import { SlHome } from 'react-icons/sl';
import { SiAwslambda } from 'react-icons/si';
import { BsInfoSquare, BsEnvelopeAt } from 'react-icons/bs';

//Logo photo
import logo from '../img/logo.png';

// Define our base class
const className =
  'bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40';

//home page
const home = () => {
  // return (
  //   <>
  //     <div className="w-full h-20 bg-neutral-500 sticky top-0">
  //       <div className="container mx-auto px-4 h-full">
  //         <div className="flex justify-between items-center h-full">
  //           {/* <Logo /> */}
  //           <ul className="hidden md:flex gap-x-6 text-white">
  //             <li>
  //               <Link href="/about">
  //                 <p>About Us</p>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/contact">
  //                 <p>Contact</p>
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/functions">
  //                 <p>Functions list</p>
  //               </Link>
  //             </li>
  //           </ul>
  //           {/* <Button /> */}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  // return (
  // <>
  //   <div className={`${className}`}>
  //     <div className="p-2 flex">
  //       <Link href="/">
  //         {/*eslint-disable-next-line*/}
  //         <img src={logo.src} alt="Company Logo" width={300} height={300} />
  //       </Link>
  //     </div>
  //     <div className="flex flex-col">
  //       <Link href="/" icon={<SlHome />}>
  //         Home
  //       </Link>
  //       <Link name="lambda" href="/lambda" icon={<SiAwslambda />} />
  //       <Link name="About Us" href="/about" icon={<BsInfoSquare />} />
  //       <Link name="Contact" href="/contact" icon={<BsEnvelopeAt />} />
  //       <Link href="/t-shirts">
  //         <a className="flex items-center p-2">
  //           <FaTshirt className="mr-2" />
  //           T-Shirts
  //         </a>
  //       </Link>
  //     </div>
  //   </div>
  // </>
  // );
};

export default home;
