import React, { useContext } from 'react';
import './Radio.css';

import { useId } from 'hooks/useId';
import { NameContext } from '../Form';

interface RadioProps {
    text: string,

    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    children?: React.ReactNode,
    checked?: boolean,
    marginBottom?: boolean,
};

const Radio = (props: RadioProps) => {
    
    const {text, children, onChange, checked, marginBottom} = props;
    const {id} = useId("radio");

    const name = useContext(NameContext);

    return (
        <label
            className={"radio" + (marginBottom ? " radio_margin-bottom" : "") }
            htmlFor={id} 
        >

            <input 
                onChange={onChange}
                className="radio__input"
                type="radio" 
                name={name} 
                id={id} 
                checked={checked}
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