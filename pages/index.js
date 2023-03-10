import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import dbConnect from '../config/config'
import users from '../models/users'
const inter = Inter({ subsets: ['latin'] })

export default function Home({Users}) {
  const [data,setData]=useState([])
  console.log(Users);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          {Users.map((u,i)=>{
            return <a key={i.toString()}>
              <p>id: {u._id}</p>
             <p> {u.name} {u.last}</p>
              <img
                src={u.img}
                alt={u.name}
                className={styles.vercelLogo}
                width={100}
           
              />
            </a>
          })}
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

        </div>
      </main>
    </>
  )
}



export async function getServerSideProps() {
  await dbConnect()

  /* find all the data in our database */
  const result = await users.find({})
  const Users = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()
    return user
  })

  return { props: { Users: Users } }
}
