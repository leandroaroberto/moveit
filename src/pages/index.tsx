import styles from './../styles/pages/Home.module.css';


import { Profile } from '../components/Profile';
import {ExperienceBar} from './../components/ExperienceBar';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>      
      <Head>
        <title>Início | Move.it</title>
      </Head>      
      
      <ExperienceBar />

      <section>
        <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />    
        </div>
        <div>
          
        </div>        
      </section>
    </div>
  );
}
