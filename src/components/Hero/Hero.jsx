import Button from 'components/common/Button/Button';

import './Hero.scss';


const Hero = () => {
    return (
        <section className="c-hero">
            <h1 className="c-hero__title">Here is a title</h1>
            <p className="c-hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisi a dui porttitor posuere.</p>
            <Button title="CTA BUTTON" href="/one" color="white" />
            <div className="c-hero__image"></div>
        </section>
    );

};

export default Hero;