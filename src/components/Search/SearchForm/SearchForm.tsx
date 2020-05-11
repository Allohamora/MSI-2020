import React from 'react';
import './SearchForm.css';

import { Form, Radio } from '../../Form';
import { Selector } from '../../Selector';
import { Button } from '../../Button';

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