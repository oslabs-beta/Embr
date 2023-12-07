import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Functionrow from './components/functionrow';
import { SiAwslambda } from 'react-icons/si';
import { GiAmberMosquito } from 'react-icons/gi';
import { IoIosContact } from 'react-icons/io';

//home page
const home = () => {
  return (
    <>
      <div className="w-full h-20 bg-neutral-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <GiAmberMosquito style={{ marginRight: '8px' }} />
                <Link href="/about">
                  <p>About Ember</p>
                </Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <IoIosContact style={{ marginRight: '8px' }} />
                <Link href="/contact">
                  <p>Contact Us</p>
                </Link>
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <SiAwslambda style={{ marginRight: '8px' }} />
                <Link href="https://aws.amazon.com/lambda/">
                  <p>Lambda</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
      <div>
        <Functionrow />
        <Functionrow />
        <Functionrow />
      </div>
    </>
  );
};

export default home;
