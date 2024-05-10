import { useRef } from "react";
import { useEffect } from "react";

export function useOutSideClick(handleClose , listenCap = true) {
    const refBtn = useRef();
    useEffect(() => {
        const handleClickDoc = (e) => {
            if (refBtn.current && !refBtn.current.contains(e.target)) {
                handleClose();
            }
        }


        document.addEventListener("click", handleClickDoc, listenCap)


        return () => document.removeEventListener("click", handleClickDoc, listenCap)
    }, [handleClose , listenCap])

    return refBtn
}

