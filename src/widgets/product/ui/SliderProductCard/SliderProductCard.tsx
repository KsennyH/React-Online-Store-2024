import { useKeenSlider } from "keen-slider/react";
import 'keen-slider/keen-slider.min.css'
import { JSX, useState } from "react";
import styles from "./SliderProductCard.module.scss";

export function SliderProductCard({ images }: { images: string[] }): JSX.Element {

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
            <div ref={sliderRef} className={`${styles.wrapper} keen-slider`}>
                {
                    images.map((el, i: number) => <div key={i} className="keen-slider__slide"><img src={el} /></div>)
                }
            </div>
            <div className={styles.pagination}>
                {
                    images.map((el, i: number) => <div key={i}  onClick={() => instanceRef.current?.moveToIdx(i)} className={`${styles.bottom} ${
              i === currentSlide ? styles.borderActive : ''
            }`} ><img src={el} /></div>)
                }
            </div>
        </div> 
    );
}