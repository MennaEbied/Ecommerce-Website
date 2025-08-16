import { useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const PromoSection = ({
  bgColor = 'bg-pink-200',
  discountText = '30% OFF',
  mainHeading = 'HAPPY HOURS',
  dateRange = '14 Jan to 28 Jan',
  subHeading = 'Smart Solo',
  title = 'Winter Sale',
  description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis.',
  imageSrc,
  imageAlt = 'Promotional Product',
  minHeight = 'min-h-[400px]',
  textColor = 'text-black',
}) => {
  const containerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightContentRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const trigger = containerRef.current;

    gsap.from(leftTextRef.current.children, {
      opacity: 0, x: -50, duration: 1.5, ease: 'power3.out', stagger: 0.3,
      scrollTrigger: { trigger, start: "top 80%", toggleActions: "play none none none" }
    });

    gsap.from(rightContentRef.current.children, {
      opacity: 0, x: 50, duration: 1.5, ease: 'power3.out', stagger: 0.3,
      scrollTrigger: { trigger, start: "top 80%", toggleActions: "play none none none" }
    });

    gsap.from(imageRef.current, {
      opacity: 0, scale: 0.8, duration: 1.5, ease: 'power3.out',
      scrollTrigger: { trigger, start: "top 80%", toggleActions: "play none none none" }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`flex justify-center items-center w-full ${minHeight} py-4 ${textColor}`}>
      <div className={`rounded-none md:rounded-2xl ${bgColor} w-full max-w-6xl relative p-6 md:p-8`}>
        <div className='flex flex-col md:flex-row justify-between items-center w-full gap-2'>
          {/* Left text */}
          <div ref={leftTextRef} className='z-10 text-center w-full md:w-1/3 order-1 '>
            <p className="text-sm font-semibold">{discountText}</p>
            <h2 className='text-3xl sm:text-4xl font-bold leading-tight'>
              {mainHeading}
            </h2>
            <p className="mt-2 text-xs">{dateRange}</p>
          </div>

          {/* Image */}
          <div 
            ref={imageRef} 
            className="relative w-full h-64 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[350px] md:h-[350px] z-0 order-2"
          >
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right text */}
          <div ref={rightContentRef} className='z-10 text-center w-full md:w-1/3 order-3'>
            <p className="text-sm font-semibold">{subHeading}</p>
            <h2 className='text-xl sm:text-2xl font-bold leading-tight'>
              {title}
            </h2>
            <p className="mt-2 text-xs md:max-w-[200px] mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoSection;