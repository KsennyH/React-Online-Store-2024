import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css'
import { useState } from "react";
import styles from "./SliderProductCard.module.scss";

function SliderProductCard({ images }: { images: string[] }) {

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slides: {
            perView: 1,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    const [currentSlide, setCurrentSlide] = useState(0);
            
    return(
        <div className={styles.sliderImages}>
            <div ref={sliderRef} className={`${styles.sliderImages__wrapper} keen-slider`}>
                {
                    images.map((el, i: number) => <div key={i} className="keen-slider__slide"><img src={el} /></div>)
                }
            </div>
            <div className={styles.sliderImages__pagination}>
                {
                    images.map((el, i: number) => <div key={i}  onClick={() => instanceRef.current?.moveToIdx(i)} className={`${styles.sliderImages__bottom} ${
              i === currentSlide ? styles.borderActive : ''
            }`} ><img src={el} /></div>)
                }
            </div>
        </div> 
    );
}

export default SliderProductCard;