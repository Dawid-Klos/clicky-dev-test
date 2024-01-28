"use client";

import {
    motion,
    useScroll,
    useTransform,
    useSpring
} from "framer-motion";

import Button from 'components/common/Button/Button';

import './Hero.scss';


const Hero = () => {
    const { scrollYProgress } = useScroll();
    const springConfig = { damping: 150, stiffness: 500 };

    const h1Y = useTransform(scrollYProgress, [0, 1], [0, -2400]);
    const pY = useTransform(scrollYProgress, [0, 1], [0, 2400]);
    const bgY = useTransform(scrollYProgress, [0, 1], [0, -400]);

    const h1SpringY = useSpring(h1Y, springConfig);
    const pSpringY = useSpring(pY, springConfig);
    const bgSpringY = useSpring(bgY, springConfig);

    return (
        <section className="c-hero">
            <motion.h1 style={{ x: h1SpringY }} className="c-hero__title">Here is a title</motion.h1>

            <motion.p style={{ x: pSpringY }} className="c-hero__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nisi a dui porttitor posuere.</motion.p>

            <motion.div style={{ y: -bgSpringY }}>
                <Button title="CTA BUTTON" href="/one" color="white" />
            </motion.div>

            <motion.div style={{ y: bgSpringY }} className="c-hero__image"></motion.div>
        </section>
    );

};

export default Hero;