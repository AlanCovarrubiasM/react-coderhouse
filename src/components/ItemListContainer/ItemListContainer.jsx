import { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts, getCategory } from "../../firebase/db";

function ItemListContainer(props){
    const{category} = useParams();  
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const fetchProducts  = async () =>{
            try {
                let result;
                if (category) {
                result = await getCategory(category);
                } else {
                result = await getProducts();
                }

                setProducts(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [category]);

    return(
        <main className="p-5">
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer;