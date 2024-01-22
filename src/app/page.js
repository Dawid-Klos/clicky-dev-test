import dynamic from 'next/dynamic';

const Header = dynamic(() => import('components/Header/Header'), { ssr: false });

import styles from 'app/page.module.scss';

export default function Home() {
  return (
    <>
      <Header />
    </>

  );
}
