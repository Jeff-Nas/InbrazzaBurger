import { useState } from "react";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { Produtos } from "../components/Produtos";

export default function Home() {
    const [activeSection, setActiveSection] = useState("entradas")
    return (
        <div>
            <Header />
            <Menu active={activeSection} onChange={setActiveSection} />
            <Produtos onSectionChange={setActiveSection} />
        </div>
    )
}