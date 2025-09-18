import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Produtos } from "../components/Produtos";
import useIsMobile from "../hooks/useIsMobile";

export default function Home() {
    const isMobile = useIsMobile();
    const [activeSection, setActiveSection] = useState("entradas");

    return (
        <div>
            <Header />
            {isMobile && (<Menu active={activeSection} onChange={setActiveSection} />)}

            <Produtos onSectionChange={setActiveSection} />
        </div>
    )
}