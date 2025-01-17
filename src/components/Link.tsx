interface Props {
    children: any,
    to?: string
    class?: string,
    type?: 'transparent' | 'bordered'
}
const types = {
    transparent: 'transparent',
    bordered: 'bordered'
}

export function Link({ children, class: className, type, to = '#' }: Props) {

    if (type === types.transparent || !type) {
        return (
            <a
                href={to}
                class={`w-fit font-light bg-gray-900 -tracking-wider hover:backdrop-brightness-50 transition-all duration-300 text-white px-10 py-2 backdrop-brightness-95 bg-transparent ${className}`}>
                {children}
            </a>
        )
    }

    if (type === types.bordered) {
        return (
            <a
                href={to}
                class={`w-fit font-light uppercase border px-10 py-2 border-black hover:backdrop-brightness-95 transition-all duration-300 ${className}`}>
                {children}
            </a>
        )
    }
}