import React from 'react'
import Form from "next/form";
import SearchFormResetBtn from './SearchFormResetBtn';

const SearchForm = () => {
  
    const query = 'test';
  
  
    return (
    
    <Form action="/" scroll={false} className="search-form">
        <input 
            name='query'
            defaultValue={""}
            className="search-input"
            placeholder='Search Startups..'
        />    
        {query && <SearchFormResetBtn />}
        <button type='submit' className='search-btn text-white'>
            S
        </button>
    </Form>
  )
}

export default SearchForm;


// we want to ensure this renders on the server side --> efficient loading etc. 
// previously it would have been impossible because it has a lot of client interaction like reading input etc.
//* the new <Form /> component from nextjs directly updates the search params of the URL. Eg. if someone searches 'Horse' in the search bar and clicks Submit, your URL will become 
//* /search/?query=horse