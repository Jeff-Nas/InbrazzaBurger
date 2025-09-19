import products from "../data/products.json"
import { ImageProduct } from "./ImageProduct";
import { TextBase } from "./TextBase";
import { TextPrice } from "./TextPrice";

const highlights = products.filter(product => product.maisPedido);

export function Highlights() {

    return (

        <div>
            {highlights.map(item => (
                <div key={item.id}>
                    <ImageProduct src={item.image} alt={`Imagem de ${item.name}`} />
                    <TextBase>{item.name}</TextBase>
                    <TextPrice
                        price={item?.price}
                    />
                </div>
            ))}
            <div>
                Total: <TextPrice price={highlights.reduce((acc, item) => (acc + item.price), 0)} />
            </div>
        </div>

    )
}