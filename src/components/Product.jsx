import Card from "./Reusable/Card";

const Product = ({product}) => {
    return ( <Card>
        <figure>
            <img src={product.media[0]} alt={product.name} />
        </figure>
        <div className="text-gray-700 flex justify-between text-md w-full font-bold">
            <h3 >{product.name}</h3>
            <p>${product.price}</p>
        </div>
    </Card> );
}
 
export default Product;