import React from 'react';
import { useId } from '../../../hooks/useId';
import { NameContext } from '..';
import './index.css';

interface RadioProps {
    text: string,
    children?: React.ReactNode,
};

const Radio = (props: RadioProps) => {
    
    const {text, children} = props;
    const {id} = useId("radio");

    return (
        <label className="radio" htmlFor={id} >

            <NameContext.Consumer>
                {
                    name => (
                            <input 
                                className="radio__input"
                                type="radio" 
                                name={name} 
                                id={id} 
                            />
                    )
                }
            </NameContext.Consumer>

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