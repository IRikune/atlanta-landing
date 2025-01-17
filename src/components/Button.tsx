interface Props {
    children: any,
    class?: string,
    type?: 'transparent' | 'bordered'
}
const types = {
    transparent: 'transparent',
    bordered: 'bordered'
}

export function Button({ children, class: className, type }: Props) {

    if (type === types.transparent || !type) {
        return (
            <button
                class={`w-fit font-light bg-emerald-500 -tracking-wider hover:backdrop-brightness-90 transition-all duration-300 text-white px-10 py-2 backdrop-brightness-95 bg-transparent ${className}`}>
                {children}
            </button>
        )
    }

    if (type === types.bordered) {
        return (
            <button
                class={`w-fit font-light uppercase border px-10 py-2 border-black hover:backdrop-brightness-95 transition-all duration-300 ${className}`}>
                {children}
            </button>
        )
    }
}