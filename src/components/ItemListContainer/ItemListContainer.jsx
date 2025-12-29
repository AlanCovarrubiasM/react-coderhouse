import { useState, useEffect } from "react";
import ItemList from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props){
    const{categoria} = useParams();  
    const [products, setProducts] = useState([]);

    useEffect(() =>{
        const url = categoria
                ? `https://dummyjson.com/products/category/${categoria}`
                : 'https://dummyjson.com/products';

        console.log(url);
        const fetchProducts  = async () =>{
            try {
                const response = await fetch(url);
                if (!response.ok) 
                    throw new Error("Error en la petición");
                const result = await response.json();
                setProducts(result.products);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();
    }, [categoria]);

    return(
        <main className="p-5">
            <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer;