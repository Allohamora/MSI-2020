import React, { useEffect, useState, MouseEvent } from 'react';
import './SearchForm.css';

import { Form, Radio } from 'components/Form';
import { Selector } from 'components/Selector';
import { Button } from 'components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/rootReducer';
import { searchCategories, SearchType, SearchCategory, searchAction, SearchQuery } from 'redux/actions/jokesActions';
import { Categories } from 'redux/reducers/jokesReducer';

interface SearchFormProps {

};

const SearchForm = (props: SearchFormProps) => {

    // categories block
    const categories = useSelector<RootState, Categories>( state => state.jokes.categories );
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( searchCategories() );
        // eslint-disable-next-line
    }, [] )

    // form data block
    const [type, setType] = useState<SearchType>("RANDOM");
    const [category, setCategory] = useState<SearchCategory>("");
    const [query, setQuery] = useState<SearchQuery>("");

    // form handlers block
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const sendForm = (e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        switch(type){
            case "CATEGORY":
                if( !category.trim() ){
                    // todo Error
                    return;
                }
                break;
            case "SEARCH":
                if( !query.trim() ){
                    // todo Error
                    return;
                }
                break;
        }
        dispatch( searchAction(type, category, query) );
    }

    const createRadioChangeHandler = (type: SearchType) => () => {
        setCategory("");
        setQuery("");
        setType(type);
    }
    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }
    const selectorChangeHandler = (selector: string) => {
        setCategory(selector);
    }

    interface RadioBtn {
        text: string,
        type: SearchType,
        children?: React.ReactNode,
        marginBottom?: boolean
    }
    // form radio buttons block
    const radioButtons: RadioBtn[] = [
        {
            text: "Random",
            type: "RANDOM"
        },
        {
            text: "From categories",
            type: "CATEGORY",
            children: categories 
                        ? (<Selector 
                            selectors={categories} 
                            changeHandler={selectorChangeHandler}
                            reset={ !(type === "CATEGORY") }
                          />)
                        : (<div>Loading...</div>)
        },
        {
            text: "Search",
            type: "SEARCH",
            marginBottom: true,
            children: (<Form.Input 
                            placeholder="Free text search..." 
                            onChange={inputChangeHandler}
                            value={query}
                       />)
        }
    ];

    // view block
    return (
        <Form 
            className="search-form" 
            onSubmit={ submitHandler }
        >
            {
                radioButtons.map( radio => (
                    <Radio 
                        key={radio.text} 
                        text={radio.text} 
                        onChange={createRadioChangeHandler(radio.type)} 
                        checked={ radio.type === type } 
                        marginBottom={radio.marginBottom}
                    >
                        {
                            radio.children
                        }
                    </Radio>
                ) )
            }

            <Button text="Get a joke" onClick={sendForm} />
        </Form>
    );
};

export { SearchForm };