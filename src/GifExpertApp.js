import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <Fragment>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid key={category} category={category}></GifGrid>
                    ))
                }
            </ol>
        </Fragment>
    );
}

export default GifExpertApp;