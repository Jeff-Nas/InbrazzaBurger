
export function TextPrice({ price, variant = "small", className = "text-gray-600" }) {

    const sizes = {
        small: "sm",
        base: "base",
        large: "lg"
    }

    if (price == null) {
        return null;
    }

    return (
        <span
            className={`text-${sizes[variant]}  font-extrabold antialiased ${className}`}
        >
            {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
    )
}