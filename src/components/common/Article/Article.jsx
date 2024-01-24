import Image from 'next/image';

import './Article.scss';

const Article = ({ title, subtitle, paragraphs, image, imageAlt }) => {
    return (
        <section className="c-article">
            <article className="c-article__left-col">
                <h2 className="c-article__title">{title}</h2>
                <p className="c-article__text c-article__text--bold">{subtitle}</p>
                {
                    paragraphs && paragraphs.map((paragraph, index) => {
                        return (
                            <p className="c-article__text" key={title + "_" + index}>{paragraph}</p>
                        );
                    })
                }
            </article>
            <div className="c-article__right-col">
                <Image className="c-article__image" src={image} alt={imageAlt} loading="lazy" />
            </div>
        </section>
    );
}

export default Article;