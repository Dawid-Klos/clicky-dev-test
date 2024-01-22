import './Divider.scss';

const Divider = ({ color }) => {
    const dividerColor = color ? `c-divider--${color}` : '';

    return (
        <span className={`c-divider ${dividerColor}`}></span>
    );
};

export default Divider;
