import Image from 'next/image'
import React from 'react'
import styles from './card.module.css'
import Link from 'next/link'

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt.substring(0, 10)} - {" "}</span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href="">
                
                <h1>{item.title}</h1>
            </Link>
            <p>
                Lorem ipsum dolor sit adipisicing elit. Atque harum ex eum numquam in. Illum sapiente nisi asperiores voluptatibus neque!
            </p>
            <Link href="">Read More</Link>

        </div>

    </div>
  )
}

export default Card