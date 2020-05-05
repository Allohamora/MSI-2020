import React from 'react';
import { useId } from '../../hooks/useId';
import './index.css';

interface RadioProps {
    name: string,
    text: string,
    children?: React.ReactNode,
};

const Radio = (props: RadioProps) => {

    const {name, text, children} = props;
    const {id} = useId("radio");

    return (
        <label className="radio" htmlFor={id} >

            <input 
                className="radio__input"
                type="radio" 
                name={name} 
                id={id} 
            />

            <div className="radio__btn-wrap">
                <span className="radio__btn" />
                <span className="radio__text" >
                    {text}
                </span>
            </div>

            {
                children && <div className="radio__content">
                    {
                        children
                    }
                </div>
            }
            
        </label>
    );
};

export { Radio };