"use client";
import React from 'react'
import { openingHours, socials } from '@/constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'


const Footer = () => {

    gsap.registerPlugin(SplitText);

    useGSAP(() => {
        const titleSplit = new SplitText("#contact h2", {
            type: "words",
        });

        titleSplit.words.forEach((word) => {
            word.classList.add("text-gradient");
        });

       const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact",
                start: "top center",
            },
            ease: 'power1.inOut',
       });
       

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.02,
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.02,
        })
        .fromTo('#f-right-leaf', { y: -50 }, { y: 0, duration: 1, ease: 'none' })
        .fromTo('#f-left-leaf', { y: 50 }, { y: 0, duration: 1, ease: 'none' },'<')
    });

  return (
    <footer id="contact">
	 <img src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
	 <img src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
	 
	 <div className="content">
		<h2>Where to Find Us</h2>
		
		<div>
		 <h3>Visit Our Bar</h3>
		 <p>
            29 First Meadow Piece, Quinton,<br/>Birmingham, England
         </p>
		</div>
		
		<div>
		 <h3>Contact Us</h3>
		 <p>(44) 987-6543</p>
		 <p>hi@eastlancers.com</p>
		</div>
		
		<div>
		 <h3>Open Every Day</h3>
		 {openingHours.map((time) => (
			<p key={time.day}>
			 {time.day} : {time.time}
			</p>
		 ))}
		</div>
		
		<div>
		 <h3>Socials</h3>
		 
		 <div className="flex-center gap-5">
			{socials.map((social) => (
			 <a
			 	key={social.name}
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				aria-label={social.name}
			 >
				<img src={social.icon} />
			 </a>
			))}
		 </div>
		</div>
	 </div>
	</footer>
  )
}

export default Footer