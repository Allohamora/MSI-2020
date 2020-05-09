import React from 'react';
import { Form } from '../Form';
import './index.css';

interface RightSideProps {
    show: boolean,
};

const RightSide = (props: RightSideProps) => {

    const {show} = props;

    const cls = [ "right-side" ];

    if(show) cls.push("right-side_show");

    return (
        <div className={cls.join(" ")} >
            <Form>
                <Form.Radio text="123" />
                <Form.Radio text="321" />
                <Form.Radio text="222" />
            </Form>
        </div>
    )
};

export { RightSide };