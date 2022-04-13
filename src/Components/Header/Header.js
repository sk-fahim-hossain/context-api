import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [category,setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h3>This is Header**</h3>
            <button onClick={()=>setCategory('laptop')}>Laptop</button>
            <button onClick={()=>setCategory('mobile')}>Mobile</button>
            <button onClick={()=>setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;