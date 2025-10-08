import { useState } from "react"
import products from "../data/products.json"
import { TextBase } from "./TextBase"
import { PlusCircleIcon, CheckCircleIcon } from "@phosphor-icons/react";

const molhos = products.filter(p => p.category === "molhos");
const adicionais = products.filter(p => p.category === "adicionais")

export function AditionalItems() {

    const [selected, setSelected] = useState(
        molhos.reduce((acc, item) => {
            acc[item.id] = false;
            return acc
        }, {})
    )

    function toggleMolho(id) {
        setSelected(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    return (
        <div className="font-display p-4">
            <div className="pb-3">
                <TextBase
                    as="h2"
                    role="reading"
                    variant="heading"
                >Molhos
                </TextBase>
                <TextBase variant="mini">Escolha até três itens</TextBase>
            </div>
            <div>
                {molhos.map(p => (
                    <div key={p.id}>
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <img
                                    className="w-12 h-12 rounded-sm"
                                    src={p.image}
                                    alt={p.name}
                                />
                                <div className="flex flex-col">
                                    {p.name}
                                    <TextBase variant="mini">Max 1</TextBase>
                                </div>
                            </div>
                            {
                                selected[p.id]
                                    ? <button onClick={() => toggleMolho(p.id)}><CheckCircleIcon size={26} weight="fill" className="text-orange-600" /></button>
                                    : <button onClick={() => toggleMolho(p.id)}><PlusCircleIcon size={26} className="text-orange-600" /></button>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}