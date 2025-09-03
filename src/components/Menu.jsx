import { useState } from "react";


export function Menu() {

    const [active, setActive] = useState(null)

    const menuItems = [
        { label: 'Entradas', id: 'entradas' },
        { label: 'Combos', id: 'combos' },
        { label: 'Hambúrguers', id: 'burguer' },
        { label: 'Smash Burger', id: 'smash-burger' },
        { label: 'Combos Smash', id: 'smash-combo' },
        { label: 'Bebidas', id: 'bebidas' },
    ];

    const handleClick = (id) => {
        console.log('Item ativo:', id)
    }
    return (
        <nav className="flex gap-2 p-2 overflow-x-auto whitespace-nowrap no-scrollbar my-3">
            <ul className="flex gap-5">
                {menuItems.map((item) => (
                    <li key={item.id} className="list-none font-medium text-[13px]">
                        <a
                            //href={`#${item.id}`} 
                            onClick={() => setActive(item.id)}

                            className={`block py-1 text-gray-800 ${active === item.id
                                ? " text-red-700 border-b-2 border-red-700"
                                : ""
                                }`}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}