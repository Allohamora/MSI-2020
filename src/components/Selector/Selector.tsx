import React, { useState } from 'react';
import './Selector.css';

import { Button } from 'components/Button';

interface SelectorProps {
    changeHandler: (value: string) => void,
    selectors: string[],
    reset?: boolean,
};

const Selector = (props: SelectorProps) => {

    const {changeHandler, selectors, reset} = props;

    const [current, setCurrent] = useState("");

    if( current !== "" && reset ) setCurrent("");

    return (
        <div className="selector" >
            {
                selectors.map( selector => (
                    <Button
                        onClick={ e => {
                            setCurrent(selector);
                            changeHandler(selector);
                        } }
                        
                        active={ selector === current }
                        text={selector}
                        key={selector}
                        selector
                        marginBottom
                    />
                ) )
            }
        </div>
    );
};

export { Selector };