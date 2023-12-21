'use client';

import React from 'react';
import Link from 'next/link';
import { SiAwslambda } from 'react-icons/si';
import { RiFunctionFill } from 'react-icons/ri';
import { IoHomeOutline } from 'react-icons/io5';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-neutral-500 sticky top-0 z-10">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <ul className="hidden md:flex gap-x-6 text-white">
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <IoHomeOutline style={{ marginRight: '8px' }} />
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <RiFunctionFill style={{ marginRight: '8px' }} />
              <Link href="/">
                <p>Function</p>
              </Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <MdOutlineMarkEmailRead style={{ marginRight: '8px' }} />
              <Link href="/email">
                <p>Notification</p>
              </Link>
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <SiAwslambda style={{ marginRight: '8px' }} />
              <Link href="https://aws.amazon.com/lambda/" target="_blank">
                <p>Lambda</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
