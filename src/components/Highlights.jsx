import products from "../data/products.json"
import { ImageProduct } from "./ImageProduct";
import { TextBase } from "./TextBase";
import { TextPrice } from "./TextPrice";
import { StarIcon } from "@phosphor-icons/react";

const highlights = products.filter(product => product.maisPedido);

export function Highlights() {

    return (

        <div>
            <TextBase
                as="h2"
                variant="heading"
                role="heading"

            >
                Destaques
            </TextBase>
            <div className="flex gap-2 overflow-scroll no-scrollbar overveflow-x-auto snap-x snap-mandatory">
                {highlights.map(item => (
                    <div className="p-2 rounded-xl  border bg-gray-50 border-gray-100  flex shrink-0">
                        <div className="flex flex-col shrink-0 snap-center" key={item.id}>
                            <div className="relative">
                                <ImageProduct
                                    src={item.image}
                                    variant="large"
                                    alt={`Imagem de ${item.name}`} />
                                <StarIcon
                                    className="absolute top-1.5 right-1.5 text-yellow-300"
                                    weight="bold"
                                    size={18}
                                />
                            </div>
                            <TextBase
                                as="h3"
                                role="heading"
                                variant="strong"
                                className="py-1"
                            >
                                {item.name}
                            </TextBase>
                            <TextPrice
                                price={item?.price}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}