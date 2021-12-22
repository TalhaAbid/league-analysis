import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import DamageAnalysis from '../components/DamageAnalysis'

const Home: NextPage = () => {
  return (
    <div>
      <DamageAnalysis />
    </div>
  )
}

export default Home
