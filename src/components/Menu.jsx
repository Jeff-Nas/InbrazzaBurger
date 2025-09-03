
export function Menu() {
    const menuItems = [
        { label: 'Entradas', id: 'entradas' },
        { label: 'Combos', id: 'combos' },
        { label: 'Hambúrguers', id: 'burguer' },
        { label: 'Smash Burger', id: 'smash-burger' },
        { label: 'Combos Smash', id: 'smash-combo' },
        { label: 'Bebidas', id: 'bebidas' },
    ];

    return (
        <nav className="flex gap-2 p-2 overflow-x-auto whitespace-nowrap no-scrollbar my-3">
            {menuItems.map(item => (
                <a key={item.id} href={`#${item.id}`}>
                    <li className="list-none">{item.label}</li>
                </a>
            ))}
        </nav>
    )
}