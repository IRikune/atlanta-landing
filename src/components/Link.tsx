interface Props {
    children: any
    class?: string
    to: string
    type?: 'transparent' | 'bordered'
}

export function Link({ to, children, class: className }: Props) {
    return (
        <a href={to} class={`font-thin -tracking-wider hover:backdrop-brightness-90 transition-all duration-300 text-white px-10 py-2 backdrop-brightness-95 bg-transparent ${className}`}>
            {children}
        </a>
    )
}