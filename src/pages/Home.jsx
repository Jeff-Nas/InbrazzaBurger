import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Products } from "../components/Products";
import useIsMobile from "../hooks/useIsMobile";
import { Highlights } from "../components/Highlights";
import { TextBase } from "../components/TextBase";


export default function Home() {
    const isMobile = useIsMobile();
    const [activeSection, setActiveSection] = useState("entradas");

    return (
        <div>
            <Header />
            {isMobile && (<Menu active={activeSection} onChange={setActiveSection} />)}

            <main className="px-2">
                <Products onSectionChange={setActiveSection} />
                <Highlights />
                <TextBase
                    as="h2"
                    role="heading"
                    variant="heading"
                >
                    Entradas
                </TextBase>
                <TextBase
                    as="p"
                    variant="mini"
                >
                    Mate a sua fome nesse Burger smash delicioso de carne bovina artesanal esmagada na chapa, bacon crocante, queijo cheddar Vigor, aquela cebola roxa chapeada, tudo isso no pão brioche da felicidade acompanhado de batata frita de 100g e aquele refri coca-cola 250ml geladinha zero o                </TextBase>
            </main>
        </div>
    )
}