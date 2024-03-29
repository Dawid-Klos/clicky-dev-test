import Hero from 'components/Hero/Hero';
import Header from 'components/Header/Header';
import Article from 'components/common/Article/Article';
import Testimonials from 'components/Testimonials/Testimonials';
import Footer from 'components/Footer/Footer';

import { myArticle } from 'data/articles';

import './page.scss';


export default function Home() {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />
        <Article {...myArticle} />
        <Testimonials />
      </main>

      <Footer />
    </>
  );
}
