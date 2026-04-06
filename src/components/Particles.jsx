const Particles = ({ count = 60 }) => {
    const particles = Array.from({ length: count }, (_, i) => {
        const style = {
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            animationDelay: Math.random() * 20 + "s",
            animationDuration: 18 + Math.random() * 8 + "s",
        };

        return <div key={i} className="particle" style={style} />;
    });

    return <div className="particles">{particles}</div>;
}

export default Particles;