import { useState, useRef, useEffect } from "react";

const Counter = ({ target }) => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setVisible(true);
        });

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!visible) return;

        let current = 0;
        const step = target / (2000 / 16);

        const interval = setInterval(() => {
            current += step;

            if (current >= target) {
                setValue(target);
                clearInterval(interval);
            } else {
                setValue(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(interval);
    }, [visible, target]);

    return <span ref={ref}>{value}</span>;
};

export default Counter;