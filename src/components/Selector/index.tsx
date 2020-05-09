import React, { useState } from 'react';
import { Button } from '../Button';
import 'index.css';

interface SelectorProps {
    changeHandler: (value: string) => void,
    selectors: string[],
};

const Selector = (props: SelectorProps) => {

    const {changeHandler, selectors} = props;

    const [current, setCurrent] = useState("");

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
                    />
                ) )
            }
        </div>
    );
};

export { Selector };