import products from "../data/products.json"
import { ImageProduct } from "./ImageProduct";
import { TextBase } from "./TextBase";
import { TextPrice } from "./TextPrice";
import { StarIcon } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

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
            <div className="flex gap-2.5 py-2 overflow-scroll no-scrollbar overveflow-x-auto snap-x snap-mandatory">
                {highlights.map(item => (

                    <Link
                        key={item.id}
                        to={`product/${item.id}`}
                        className="p-2 rounded-xl shadow border bg-gray-50 border-gray-200  flex shrink-0 relative">
                        <div className="flex flex-col snap-center">
                            <div>
                                <ImageProduct
                                    src={item.image}
                                    variant="large"
                                    alt={`Imagem de ${item.name}`} />
                                <StarIcon
                                    className="absolute top-41 right-2 text-orange-400"
                                    weight="fill"
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
                                className="text-orange-400"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}