interface Props {
    children: any,
    class?: string,
    type?: 'transparent' | 'bordered'
}

export function Button({ children, class: className }: Props) {
    return (
        <button class={`font-thin -tracking-wider hover:backdrop-brightness-90 transition-all duration-300 text-white px-10 py-2 backdrop-brightness-95 bg-transparent ${className}`}>
            {children}
        </button>
    )
}