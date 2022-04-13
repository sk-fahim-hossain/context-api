import { useContext } from "react";
import { CategoryContext } from "../../App";


const CategoriesDetails = (props) => {
    const [category, setCategory] = useContext(CategoryContext)
   const {name} = props.product;
    return (
        <div style={{border: '1px solid green',display: 'inline-block' ,padding: '5px'}}>
            <h3>Your Product is</h3>
            <h3> Name:{name}</h3>
            <h6>Category:{category}</h6>
            
        </div>
    );
};

export default CategoriesDetails;