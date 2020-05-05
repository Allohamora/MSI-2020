import React from 'react';
import './index.css';
import { Radio } from '../Radio';
import { Button } from '../Button';

interface SearchFormProps {

};

const SearchForm = (props: SearchFormProps) => {

    const formName: string = "search";

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form 
            className="search__form form" 
            name={formName} 
            onSubmit={ submitHandler }
        >
            <Radio name={formName} text="Random" />
            <Radio name={formName} text="From categories" >
                <div>
                    <Button text="Animal" search />
                    <Button text="Carrer" search />
                    <Button text="Celebrity" search />
                    <Button text="Dev" search />
                </div>
            </Radio>
            <Radio name={formName} text="Search" >
                <input 
                    className="form__input" 
                    type="text" 
                    placeholder="Free text search..."
                />
            </Radio>
            <Button>
                Get a joke
            </Button>
        </form>
    );
};

export { SearchForm };