const LoadingScreen = () => {
    return (
        <div className="loader" id="loader">
            <div className="loader-content">
                <div className="loader-prism">
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                    <div className="prism-face"></div>
                </div>
                <div style={{color: 'var(--accent-blue)', fontSize: '18px', textTransform: 'uppercase', letterSpacing: '3px'}}>
                    Loading...</div>
            </div>
        </div>
    );
}

export default LoadingScreen;