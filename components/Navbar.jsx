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


   </motion.nav>
  )
}

export default Navbar