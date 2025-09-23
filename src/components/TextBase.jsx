
const textVariants = {
    default: "text-sm text-gray-700",
    mini: "text-[13px] text-gray-500 font-normal",
    normal: "text-base text-gray-700",
    strong: "text-sm text-gray-800 font-semibold",
    heading: "text-lg text-gray-900 font-bold",
    title: "text-xl text-gray-900 font-bold",
}

export function TextBase({
    as: Tag = "span",
    variant = "default",
    children,
    role,
    className = ""
}) {


    return (
        <Tag className={`${textVariants[variant]} ${className} whitespace-pre-line`} role={role}>
            {children}
        </Tag>
    )
}

//role?