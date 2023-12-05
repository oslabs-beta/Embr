import React from 'react';
import styles from '../page.module.css';
import Link from 'next/link';
// import Logo from './Logo';
// import Button from './Button';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Functions', href: '/functions' },
];

//home page
const home = () => {
  return (
    <>
      <div className="w-full h-20 bg-neutral-600 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/functions">
                  <p>Functions</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            {/* <Button /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
