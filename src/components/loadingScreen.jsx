import { useEffect, useState } from "react";

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        isLoading === true ? <div className="loader" id="loader">
            <div className="loader-content">
                <div className="loader-prism">
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                </div>
                <div style={{ color: 'var(--accent-blue)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '3px' }}>
                    Loading...</div>
            </div>
        </div> : null
    );
}

export default LoadingScreen;