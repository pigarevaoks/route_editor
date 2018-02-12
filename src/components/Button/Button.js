import React from 'react'
import './Button.css';

const Button = ({ onClick, title }) => (
    <button type="button" className="button" onClick={onClick}>
        <span className="button__title">{title}</span>
    </button>
);

export default Button;