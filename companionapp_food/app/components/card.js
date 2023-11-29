import React from 'react'
import styles from '../page.module.css'
import Image from 'next/image'
export default function card(props) {
  return (
    <a className={styles.card} >
      <h2> Card </h2>
      <Image src={props.img} width={300} height={300} alt = 'food'/>
      <p>snacc time</p>
    </a>
    
  )
}
