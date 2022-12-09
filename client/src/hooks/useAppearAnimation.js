import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import gsap from "gsap";

const useAppearAnimation = (duration=0, dependencies=[]) => {
    const componentRef = useRef()

    useEffect(() => {
        gsap.fromTo(componentRef.current, 
                    {opacity: 0}, 
                    {opacity: 1, duration: duration, ease: 'ease'})
    }, dependencies)

    return componentRef
}

export default useAppearAnimation