import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext)
    return (
        <div>
            <h3>this is home**</h3>
            <p>Category is : {category}</p>
            <Categories></Categories>
        </div>
    );
};

export default Home;