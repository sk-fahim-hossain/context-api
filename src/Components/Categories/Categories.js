import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoriesDetails from '../CategoriesDetails/CategoriesDetails';


const allProducts = [
    {name:'lenovo',category:'laptop'},{name:'asus',category:'laptop'},{name:'dell',category:'laptop'},
    {name:'samsung',category:'mobile'},{name:'nokia',category:'mobile'},{name:'iphone',category:'mobile'},
    {name:'cannon',category:'camera'},{name:'sony',category:'camera'},{name:'nikkon',category:'camera'},
]
const Categories = () => {
    const [category, setCategory] = useContext(CategoryContext)
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        const machedProduct = allProducts.filter(pd =>pd.category === category && category.toLowerCase())
        setProducts(machedProduct)
    },[category])
 
    return (
        <div style={{border: '1px solid red', textAlign: 'center'}}>
            <h2>this is categories**</h2>
            <h2>Your current category is :{category}</h2>
            {
                products.map(pd =>  <CategoriesDetails product={pd}></CategoriesDetails>)
            }
           
        </div>
    );
};

export default Categories;