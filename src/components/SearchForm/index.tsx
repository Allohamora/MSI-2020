import React from 'react';
import './index.css';

import { Button } from '../Button';
import { Form } from '../Form';
import { Radio } from '../Form/Radio';
import { Selector } from '../Selector';

interface SearchFormProps {

};

const SearchForm = (props: SearchFormProps) => {

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <Form 
            className="search-form" 
            onSubmit={ submitHandler }
        >
            <Radio text="Random" />

            <Radio text="From categories" >
                <Selector 
                    selectors={["Animal", "Carrer", "Celebrity", "Dev"]} 
                    changeHandler={value => console.log(value)}
                />
            </Radio>

            <Radio text="Search" >
                <Form.Input placeholder="Free text search..." />
            </Radio>

            <Button text="Get a joke" />
        </Form>
    );
};

export { SearchForm };