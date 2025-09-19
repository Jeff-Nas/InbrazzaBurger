
export function ImageProduct({ src, alt, variant = "medium", className }) {
    const sizes = {
        medium: "w-22 h-22 rounded-lg",
        large: "w-32 h-32 rounded-xl"
    }


    return (
        <img
            className={`${sizes[variant]} ${className} object-cover`}
            src={src}
            alt={alt}
        />
    )
}