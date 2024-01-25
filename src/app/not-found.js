import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Button from 'components/common/Button/Button';

import './not-found.scss';


export default function Home() {
    return (
        <>
            <Header />
            <section className="c-not-found">
                <h1 className="c-not-found__title">Oops - Page not found</h1>
                <p className="c-not-found__description">Sorry, but the page you are looking for does not exist.</p>
                <Button title="GO BACK" href="/" color="blue" />
            </section>
            <Footer />
        </>
    );
}
