"use client";
import { sliderLists } from "@/constants"
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Menu = () => {

    gsap.registerPlugin(ScrollTrigger);
    const contentRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = (index: number) => {
        const newIndex = (index + sliderLists.length) % sliderLists.length;
        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (index: number) => {
        return sliderLists[(currentIndex + index + sliderLists.length) % sliderLists.length];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    useGSAP(() => {
        gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', {opacity: 0, xPercent: -100}, {opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' });

        gsap.fromTo('.details h2', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.details p', {yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 100, duration: 1, ease: 'power1.inOut' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#menu",
                start: "top center",
                end: "bottom 80%",
                scrub: true,
            }
        });

        tl
        .fromTo('#m-right-leaf', { x: 100 }, { x: 0, duration: 1, ease: 'power1.inOut' })
        .fromTo('#m-left-leaf', { x: -100 }, { x: 0, duration: 1, ease: 'power1.inOut' })
        

        // tl.fromTo("#m-left-leaf", {x: -50, y: -50}, {x: 100, y: -700, duration: 1, ease: 'power1.inOut'});
        // tl.from("#m-right-leaf", {x: 50, y: 50}, {x: -100, y: 700, duration: 1, ease: 'power1.inOut'});
        
        // tl.from("#m-left-leaf", {x:100, duration: 1, ease: 'power1.inOut'});
        

    }, [currentIndex]);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <img src="images/slider-left-leaf.png" alt="Slider Left Leaf" className="left-leaf" id="m-left-leaf" />
            <img src="images/slider-right-leaf.png" alt="Slider Right Leaf" className="right-leaf" id="m-right-leaf" />
            
            <h2 id="menu-heading" className="sr-only">
                Cocktails Menu
            </h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((item, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button 
                            key={item.id} 
                            onClick={() => goToSlide(index)}
                            className={`${isActive ? "text-white border-white" : "text-white/50 border-white/50"}`}
                        >
                            {item.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src="images/right-arrow.png" alt="Arrow Left" aria-hidden="true" />
                    </button>
                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src="images/left-arrow.png" alt="Left Left" aria-hidden="true" />
                    </button>
                </div>

                <div className="cocktail">
                    <img src={currentCocktail.image} className="object-contain" />
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>
                            Recipe for:
                        </p>
                        <p id="title">
                            {currentCocktail.name}
                        </p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Menu