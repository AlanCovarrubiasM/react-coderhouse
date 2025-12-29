import Item from "../Item/Item";
function ItemList({products}){
    return(
        <div className="d-flex flex-wrap justify-content-center gap-3">
            {products.map(prod => (
                <div className="col-auto d-flex" key={prod.id}>
                    <Item product={prod} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;