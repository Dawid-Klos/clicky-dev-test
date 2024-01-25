"use client";

import Image from 'next/image';
import Link from 'next/link';

import ArrowRight from 'assets/icons/arrow-right.svg';
import Phone from 'assets/icons/phone.svg';
import Email from 'assets/icons/email.svg';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="c-footer">
            <section className="c-footer__column">
                <h3 className="c-footer__title">Link one</h3>
                <Link className="c-footer__link" href="/">Here is a long link</Link>
                <Link className="c-footer__link" href="/">Short link</Link>
                <Link className="c-footer__link" href="/">Short link</Link>
            </section>

            <section className="c-footer__column">
                <h3 className="c-footer__title">Link two</h3>
                <Link className="c-footer__link" href="/">Here is a long link</Link>
                <Link className="c-footer__link" href="/">Short link</Link>
                <Link className="c-footer__link" href="/">Short link</Link>
            </section>

            <section className="c-footer__column">
                <h3 className="c-footer__title">Link three</h3>
                <Link className="c-footer__link" href="/">Here is a long link</Link>
                <Link className="c-footer__link" href="/">Short link</Link>
                <Link className="c-footer__link" href="/">Short link</Link>
            </section>

            <section className="c-footer__column">
                <h3 className="c-footer__title">Newsletter signup</h3>

                <form className="c-form">
                    <div className="c-form__input">
                        <input className="c-form__field" type="email" placeholder="Enter email*" />
                        <button className="c-form__button " type="submit">
                            <Image src={ArrowRight} alt="submit" />
                        </button>
                    </div>
                </form>

                <div className="c-footer__contact-wrapper">
                    <div className="c-footer__contact">
                        <Image className="c-footer__contact-icon" src={Phone} alt="phone" />
                        <Link className="c-footer__link c-footer__link--bold" href="tel:01234567890">01234 567 890</Link>
                    </div>

                    <div className="c-footer__contact">
                        <Image className="c-footer__contact-icon" src={Email} alt="email" />
                        <Link className="c-footer__link c-footer__link--bold" href="mail:hello@company.co.uk">hello@company.co.uk</Link>
                    </div>
                </div>
            </section>

            <div className="c-footer__bottom">
                <p className="c-footer__copyright">Copyright company name | Website and development by Clicky</p>
            </div>
        </footer>
    )
};

export default Footer;