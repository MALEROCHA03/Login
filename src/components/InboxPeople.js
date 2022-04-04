import React from 'react';
import { Cards } from './cards';
import { Main } from './Main';
import { Searchbox } from './Searchbox';


export const InboxPeople = () => {
    return (
        <div className="inbox_people">

            <Searchbox />
            <Main />
           <Cards />

        </div>
    )
}
