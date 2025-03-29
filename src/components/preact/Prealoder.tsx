import { useSignal } from "@preact/signals";
import { useWait } from "../../hooks/mod";

export function Preloader() {
    const isLoading = useSignal(true);
    const isRender = useSignal(true)
    useWait(2700)
        .then(() => { isLoading.value = false })
        .then(() => {
            useWait(2000)
                .then(() => { isRender.value = false })
        })
    return (
        <>
            {
                isRender.value && (
                    <section
                        class={`bg-blue-800 w-dvw h-dvh fixed top-0 left-0 bg-obsidian z-50 flex items-end motion-duration-1000 ${!isLoading.value && "motion-opacity-out"}`}>
                        <h1
                            class="md:text-[16.5dvw] text-[19dvw] font-spectral text-center flex md:translate-y-[6dvw] translate-y-[7dvw]"
                        >
                            <span
                                class="motion-translate-y-in motion-delay-100">U</span>
                            <span
                                class="motion-translate-y-in-100 motion-delay-300">N</span>
                            <span
                                class="motion-translate-y-in-100 motion-delay-500">L</span>
                            <span
                                class="motion-translate-y-in-100 motion-delay-700">O</span>
                            <span class="motion-translate-y-in-100 motion-delay-900">C</span>
                            <span class="motion-translate-y-in-100 motion-delay-1100">K</span>
                            <div class="motion-translate-y-in-100 motion-delay-1300 bg-white -skew-1 text-black">
                                <span class="">M</span>
                                <span class="">E</span>
                            </div>
                        </h1>
                    </section>
                )
            }

        </>

    )
}