
export function TextSecondary({ children, className }) {
    return (
        <p className={`text-sm font-light text-gray-905 ${className}`}>
            {children}
        </p>
    )
}