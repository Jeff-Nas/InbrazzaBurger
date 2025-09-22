
export function TextPrice({ price, variant = "small", className = "" }) {

    const sizes = {
        small: "sm",
        base: "base"
    }

    if (price == null) {
        return null;
    }

    return (
        <span
            className={`text-${sizes[variant]}  font-extrabold antialiased ${className ? className : "text-gray-600"}`}
        >
            {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
    )
}