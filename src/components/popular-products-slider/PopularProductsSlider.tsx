import { useGetPopularProductsQuery } from "@/api/product/productApi";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Card from "../catalog/products/product-card/ProductCard";
import styles from './PopularProductsSlider.module.scss';
import Arrow from "./Arrow";

function PopularProductSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const { data, error } = useGetPopularProductsQuery();

    if(error) {
        return <div style={{padding: 40 + 'px', display: 'flex', justifyContent: 'center' }}>Произошла ошибка: {String(error)}</div>
    }
    
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
        perView: 4,
        spacing: 24,
        },
        initial: 0,
        slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
        breakpoints: {
        '(max-width: 1200px)': {
            slides: { perView: 3, spacing: 24 },
        },
        '(max-width: 768px)': {
            slides: { perView: 2, spacing: 24 },
        },
        '(max-width: 575px)': {
            slides: { perView: 1, spacing: 0 },
        },
        },
    })

  return (
    <>
        {
            data && data.items.length > 0 &&
                <div ref={sliderRef} className="keen-slider">
                    {
                        data?.items.map((el) => (
                            <div key={el.id} className="keen-slider__slide">
                                <Card singleProduct={el} />
                            </div>
                        ))
                    }
                </div>
        }
        {loaded && instanceRef.current && (
            <>
                <div className={`${styles.arrow} ${styles.left}`}>
                    <Arrow
                        left
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                        disabled={currentSlide === 0}
                    />
                </div>
                
                <div className={`${styles.arrow} ${styles.right}`}>
                    <Arrow
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                        disabled={
                            currentSlide ===
                            instanceRef.current.track.details.slides.length - 1
                        }
                    />
                </div>
            </>
        )}
    </>
  )
}

export default PopularProductSlider;