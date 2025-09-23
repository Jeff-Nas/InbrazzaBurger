import { useParams } from "react-router-dom";
import products from '../data/products.json'
import { TextBase } from "../components/TextBase";
import { ShareButton } from "../components/ShareButton";
import { TextPrice } from "../components/TextPrice";

export function Product() {
    const { id } = useParams();
    const product = products.find(p => String(p.id) === id);


    if (!product) {
        return <p>Produto não encotrado</p>
    }

    return (
        <div>
            <div className="relative font-display">
                <img
                    className="object-cover  w-full h-70 md:h-105"
                    src={product.image}
                    alt="Imagem do produto"
                />
                <ShareButton
                    className="absolute top-2 right-2 md:top-3.5 md:right-3.5"
                    title={`${product.name} 🍔🔥`}
                    text={`Confira: ${product.name} - ${product?.description}`}
                    url={`https://inbrazza-burger.vercel.app/products/${product.id}`}
                />
                <div className=" w-full absolute top-65 md:top-100  rounded-t-2xl p-2 bg-white">
                    <div className="p-2">
                        <TextBase
                            as="h2"
                            variant="title"
                            role="heading"
                            className="md:text-2xl"
                        >
                            {product.name}
                        </TextBase>
                        <div className="mt-1.5">
                            <TextPrice
                                price={product.price}
                                variant="large"
                                className="text-orange-600 md:text-xl"
                            />
                        </div>
                        <div>
                            <TextBase className="md:text-base">{product?.description}</TextBase>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}