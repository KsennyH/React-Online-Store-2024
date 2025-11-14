import { useKeenSlider } from "keen-slider/react";
import { JSX, useState } from "react";
import styles from './PopularProductsSlider.module.scss';
import Arrow from "./Arrow";
import { ProductCardContainer } from "../ProductCardContainer/ProductCardContainer";
import { ErrorMessage } from "@/shared/ui";
import { useGetPopularProductsQuery } from "@/entities/product";

export function PopularProductSlider(): JSX.Element {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const { data, error } = useGetPopularProductsQuery();

    if(error) { 
        console.error('Ошибка при загрузке товаров:', error);
        return <ErrorMessage text="Не удалось загрузить товары. Попробуйте позже." />        
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
                                <ProductCardContainer product={el} />
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