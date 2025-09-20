
export function TextPrice({ price, variant = "small" }) {

    const sizes = {
        small: "sm",
        base: "base"
    }

    if (price == null) {
        return null;
    }

    return (
        <span
            className={`text-${sizes[variant]}  text-gray-600 font-extrabold antialiased `}
        >
            {Number(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </span>
    )
}