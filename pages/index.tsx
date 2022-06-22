import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import styles from '../styles/Home.module.css'
import {server} from '../config'
import Image from 'next/image'
import Link from 'next/link'

interface Home {
  id: number,
  osoite: string,
  m2: number, 
  velaton_hinta: number, 
  hoitovastike: number, 
  aiempi_keittio_remontti: number,
  aiempi_kylpyhuone_remontti: number, 
  aiempi_pinta_remontti: number, 
  aiempi_putki_remontti: number,
  keittio_remontti_hinta: number, 
  kylpyhuone_remontti_hinta: number, 
  pinta_remontti_hinta: number,
  putki_remontti_hinta: number, 
  keittion_kayttoika: number, 
  kylpyhuoneen_kayttoika: number, 
  pinta_kayttoika: number,
  putki_kayttoika: number
}

interface HomeProps {
  homes: Home[]
}


export const Index: NextPage<HomeProps> = ({ homes }) => {
  return (
    <div>
      <h2>Juuri sinulle</h2>
      <div className={styles.grid}>
      {homes.map((home) => (
        <Link key={home.id} href={`/homes/${encodeURIComponent(home.id)}`}>
          <div className={styles.card}>
            <Image src='/../public/esimerkki_talo.jpg' alt='image of house' width={400} height={400}/>
            <h3>{home.osoite}</h3>
            <p>{home.velaton_hinta} 000 €</p>
          </div>
        </Link>
      ))}
      </div>
    </div>
  )
  }

  export async function getStaticProps():Promise<GetStaticPropsResult<HomeProps>>  {
    const res = await fetch(`${server}/api/homes`)
    const homes = await res.json()
    
    return {
      props: {
        homes
      }
    }
  }
  
export default Index
