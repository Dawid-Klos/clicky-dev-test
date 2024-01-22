import "./Button.scss";

const Button = ({ title, color }) => {
    const buttonColor = color ? `c-button--${color}` : '';

    return <button className={`c-button ${buttonColor}`}>{title}</button>;
}

export default Button;
