export async function useWait(time: number) {
    let timer: ReturnType<typeof setTimeout>;
    return new Promise((resolve) => {
        timer = setTimeout(resolve, time);
    })
    .finally(() => {
        clearTimeout(timer);
    });
}