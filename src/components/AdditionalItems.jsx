import { useState } from "react"
import products from "../data/products.json"
import { TextBase } from "./TextBase"
import { SquareIcon, CheckSquareIcon } from "@phosphor-icons/react";

const molhos = products.filter(p => p.molhos);

export function AditionalItems() {



    return (
        <div>
            <TextBase
                as="h2"
                role="reading"
                variant="heading"
            >Molhos
            </TextBase>
            <TextBase>Escolha até três itens</TextBase>
            <div>
                {molhos.map((p, i) => (
                    <div key={i}>
                        <div>
                            <img src={p.image} alt={p.name} />
                            <div>
                                <span>{p.name}</span>
                                <TextBase>Max 1</TextBase>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}