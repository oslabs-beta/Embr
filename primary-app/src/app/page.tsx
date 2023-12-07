import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Functionrow from './components/functionrow';

//home page
const home = () => {
  return (
    <>
      <div className="w-full h-20 bg-neutral-500 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
              <li>
                <Link href="/functions">
                  <p>Functions list</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
      <div>
        <Functionrow />
      </div>
    </>
  );
};

export default home;
