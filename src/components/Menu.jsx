import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"; // Corrigido de "motion/react" para "framer-motion"

export function Menu({ active, onChange }) {
    const [indicator, setIndicator] = useState({ width: 0, left: 0 });
    const menuRef = useRef(null);

    const menuItems = [
        { label: "Entradas", id: "entradas" },
        { label: "Combos", id: "combos" },
        { label: "Hambúrguers", id: "burguer" },
        { label: "Smash Burger", id: "smash-burger" },
        { label: "Combos Smash", id: "smash-combo" },
        { label: "Bebidas", id: "bebidas" },
    ];

    // Atualiza o indicador quando o item ativo mudar
    useEffect(() => {
        if (!menuRef.current) return;

        const activeElement = menuRef.current.querySelector(`[data-id="${active}"]`);
        if (activeElement) {
            const { offsetWidth, offsetLeft } = activeElement;
            setIndicator({ width: offsetWidth, left: offsetLeft });

            // Centraliza o item ativo na área de rolagem
            const scrollContainer = menuRef.current;
            const scrollLeft = offsetLeft - scrollContainer.offsetWidth / 2 + offsetWidth / 2;
            scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
    }, [active]);

    // Função para lidar com cliques nos itens do menu
    const handleClick = (id) => {
        onChange(id); // Notifica o componente pai
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            ref={menuRef}
            className="flex gap-2 p-2 overflow-x-auto whitespace-nowrap no-scrollbar my-3 sticky top-0 bg-white z-10 shadow-sm"
        >
            <ul className="flex gap-5 relative">
                {menuItems.map((item) => (
                    <li key={item.id} className="list-none font-medium text-[13px]">
                        <button
                            data-id={item.id}
                            onClick={() => handleClick(item.id)}
                            className={`relative py-1 px-2 transition-colors duration-200 ${active === item.id ? "text-orange-600" : "text-gray-800"
                                }`}
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
                <motion.div
                    className="absolute bottom-0 h-[2px] bg-orange-600 rounded"
                    animate={{ x: indicator.left, width: indicator.width }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            </ul>
        </nav>
    );
}