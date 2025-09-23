import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Products } from "../components/Products";
import useIsMobile from "../hooks/useIsMobile";
import { Highlights } from "../components/Highlights";



export default function Home() {
    const isMobile = useIsMobile();
    const [activeSection, setActiveSection] = useState("entradas");

    return (
        <div>
            <Header />
            {isMobile && (<Menu active={activeSection} onChange={setActiveSection} />)}

            <main className="px-2 font-display md:h-auto md:w-3/4 lg:w-2/3 mx-auto">
                <Products onSectionChange={setActiveSection} />
                <Highlights />

            </main>
        </div>
    )
}