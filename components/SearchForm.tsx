import React from 'react'
import Form from "next/form";
import SearchFormResetBtn from './SearchFormResetBtn';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

const SearchForm = ({ query }: { query?: string}) => {
  
    
  
    return (
    
    <Form action="/" scroll={false} className="search-form">
        <input 
            name='query'
            defaultValue={""}
            className="search-input"
            placeholder='Search Startups..'
        />    
        {query && <SearchFormResetBtn />}
        <Button type='submit' className='search-btn'>
            <Search className='size-5' />
        </Button>
    </Form>
  )
}

export default SearchForm;


// we want to ensure this renders on the server side --> efficient loading etc. 
// previously it would have been impossible because it has a lot of client interaction like reading input etc.
//* the new <Form /> component from nextjs directly updates the search params of the URL IF NO METHOD SPECIFIED as it defaults to GET. Eg. if someone searches 'Horse' in the search bar and clicks Submit, your URL will become 
//* /search/?query=horse


// The new <Form> component in Next.js integrates with Server Actions, allowing form submissions to directly run server-side code without extra API routes.
// By default, it behaves like a regular HTML <form> but works seamlessly in the Next.js App Router.
// If the method is GET, form data will be serialized into the URL’s query string (e.g., /search?query=horse). If the method is POST, the data will be sent in the request body instead.