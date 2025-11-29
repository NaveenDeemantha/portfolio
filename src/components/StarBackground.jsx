import { useEffect, useState } from "react";

//id, size, x, y, opacity, animationDuration
//id, size, x, y, delay, animationDuration

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() =>{
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
            generateMeteors();
        }
        window.addEventListener("resize", handleResize);
    
    }, []);


    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 15000 // Increased divisor for fewer stars
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars;  i++){
            newStars.push({
                id:i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration:  Math.random() * 4 + 2,
            });
        } 
        setStars(newStars);
    };
    const generateMeteors = () => {
        const numberOfMeteors =  3; // Reduced meteors

        const newMeteors = [];

        for (let i = 0; i < numberOfMeteors;  i++){
            newMeteors.push({
                id:i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration:  Math.random() * 3 + 3,
            });
        } 
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div 
                key={star.id} 
                className="star animate-pulse-subtle absolute bg-white rounded-full" 
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                    willChange: 'opacity',
                }} 
                />
            ))}
            {meteors.map((meteor) => (
                <div 
                key={meteor.id} 
                className="meteor animate-meteor absolute bg-gradient-to-r from-white to-transparent rounded-full" 
                style={{
                    width: meteor.size * 8 + "px",
                    height: meteor.size * 2 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay + "s",
                    animationDuration: meteor.animationDuration + "s",
                    willChange: 'transform, opacity',
                }} 
                />
            ))}
        </div>
    );
};