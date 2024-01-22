import Hero from 'components/Hero/Hero';
import Header from 'components/Header/Header';

import './page.scss';


export default function Home() {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />
      </main>
    </>
  );
}
