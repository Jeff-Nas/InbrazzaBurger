import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Products } from "../components/Products";
import useIsMobile from "../hooks/useIsMobile";
import { ImageProduct } from "../components/ImageProduct";
import { TextPrice } from "../components/TextPrice";
import { Highlights } from "../components/Highlights";


export default function Home() {
    const isMobile = useIsMobile();
    const [activeSection, setActiveSection] = useState("entradas");

    return (
        <div>
            <Header />
            {isMobile && (<Menu active={activeSection} onChange={setActiveSection} />)}

            <main className="px-2">
                <ImageProduct
                    src="/public/hamburgers/brazza-bacon.jpeg"
                    alt="logo"
                    variant='large'
                />
                <TextPrice
                    variant="large"
                    price={20.25} />
                <Products onSectionChange={setActiveSection} />
                <Highlights />
            </main>
        </div>
    )
}