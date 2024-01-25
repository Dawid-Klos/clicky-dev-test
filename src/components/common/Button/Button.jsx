import Link from "next/link";

import "./Button.scss";

const Button = ({ title, href, color }) => {
    const buttonColor = color ? `c-button--${color}` : '';

    return <Link className={`c-button ${buttonColor}`} href={href}>{title}</Link>;
}

export default Button;
