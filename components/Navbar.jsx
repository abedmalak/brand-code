'use client'
import {useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from '@styles/globals.css';
import { navVariants } from '@utils/motion';

const Navbar = () => {
  return (
   <motion.nav
   variants={navVariants}
   initial='hidden'
   whileInView='show'
   className={`${styles.xPaddings} py-8 relative`}
   >
    <div className={`${styles.innerwidth} mx-auto flex justify-between gap-8`}>
    <div className='text-wh'>
      Left
    </div>
    <div>
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
        Brand
        <span className='text-ff'>Code</span>
      </h2>
    </div>
    <div>
      Right
    </div>
    </div>
    
   </motion.nav>
  )
}

export default Navbar