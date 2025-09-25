import { useParams } from "react-router-dom";
import products from '../data/products.json'
import { TextBase } from "../components/TextBase";
import { ShareButton } from "../components/ShareButton";
import { TextPrice } from "../components/TextPrice";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function Product() {
    const { id } = useParams();
    const product = products.find(p => String(p.id) === id);
    const [qtdItem, setQtdItem] = useState(1);

    function handleClick(increase) {
        setQtdItem(prev => increase ? prev + 1 : Math.max(1, prev - 1))
    }




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
                    className="absolute top-3 right-2 md:top-3.5 md:right-3.5 bg-gray-200/70 text-orange-700"
                    size={22}
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

                        <div className="flex gap-6 fixed bottom-0 w-full left-0 p-3">
                            <div className="flex gap-4 items-center justify-between">
                                <button
                                    onClick={() => handleClick(false)}
                                    className={`
                                         p-1.5 rounded-full
                                        ${qtdItem > 1
                                            ? "text-red-600 bg-orange-100"
                                            : "text-gray-500 bg-gray-200"
                                        }
                                        `}
                                    disabled={qtdItem > 1 ? false : true}
                                >
                                    <MinusIcon weight="bold" />
                                </button>

                                <div className=" text-center w-4">
                                    <TextBase as="span">{qtdItem}</TextBase>
                                </div>

                                <button
                                    onClick={() => handleClick(true)}
                                    className="text-red-600 bg-orange-100 p-1.5 rounded-full">
                                    <PlusIcon weight="bold" size={18} />
                                </button>
                            </div>
                            <button className="flex w-60 items-center rounded-xl py-2.5 px-4 justify-between bg-orange-500 text-white">
                                <TextBase variant={null} className="text-lg font-bold">Avançar</TextBase>
                                <TextPrice price={product.price * qtdItem} variant="base" className="text-white w-20" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}