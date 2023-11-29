import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
export default function card(props) {
  return (
    <a className={styles.card} >
      <h2> Card </h2>
      <Image src={props.img} layout="responsive" width={200} height={200} alt = 'food'/>
      <p>snacc time</p>
    </a>
  )
}