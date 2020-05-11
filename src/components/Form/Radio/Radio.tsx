import React, { useContext } from 'react';
import './Radio.css';

import { useId } from '../../../hooks/useId';
import { NameContext } from '../Form';

interface RadioProps {
    text: string,
    children?: React.ReactNode,
};

const Radio = (props: RadioProps) => {
    
    const {text, children} = props;
    const {id} = useId("radio");

    const name = useContext(NameContext);

    return (
        <label className="radio" htmlFor={id} >

            <input 
                className="radio__input"
                type="radio" 
                name={name} 
                id={id} 
            />

            <div className="radio__content">
                
                <span className="radio__circle" />

                <span className="radio__text" >
                    {text}
                </span>
            </div>

            {
                children && <div className="radio__children">
                    {
                        children
                    }
                </div>
            }
            
        </label>
    );
};

export { Radio };