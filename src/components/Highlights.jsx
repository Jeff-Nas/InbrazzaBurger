import products from "../data/products.json"
import { TextPrice } from "./TextPrice";

const highlights = products.filter(product => product.maisPedido);
console.table(highlights)

export function Highlights() {

    return (

        <div>
            {highlights.map((item, index) => (
                <div key={item.id}>
                    <span>{item.name}</span>
                    <TextPrice
                        price={item?.price}
                    />
                </div>
            ))}
        </div>

    )
}