import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import styles from "./SliderProductCard.module.scss";

function SliderProductCard({ images }: { images: string[] }) {

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const [currentSlide, setCurrentSlide] = useState(0);
            
    return(
        <div className={styles.sliderImages}>
            <div ref={sliderRef} className="keen-slider" style={{maxWidth: "100%"}}>
                {
                    images.map((el, i: number) => <div key={i} className="keen-slider__slide"><img style={{height: "380px", objectFit: "contain"}} src={el} /></div>)
                }
            </div>
            <div className={styles.sliderImg}>
                {
                    images.map((el, i: number) => <div style={{border: "2px solid transparent", transition: "all 0.5s ease"}} key={i}  onClick={() => instanceRef.current?.moveToIdx(i)} className={`${
              i === currentSlide ? styles.sliderBorder : ''
            }`} ><img style={{height: "100px", objectFit: "contain"}} src={el} /></div>)
                }
            </div>
        </div> 
    );
}

export default SliderProductCard;