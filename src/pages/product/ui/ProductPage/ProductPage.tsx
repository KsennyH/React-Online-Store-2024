import { useParams } from "react-router-dom";
import styles from './ProductPage.module.scss';
import { ErrorMessage } from "@/shared/ui";
import { PRODUCT_CARD_CONTENT } from "@/shared/constants";
import { Features, SingleProductWidget } from "@/widgets/product";

export function ProductPage () {

  const { id } = useParams();

  if(!id) {
    return <ErrorMessage text="Продукт не найден"/>
  }

  return (
    <div className={styles.singlePage}>
      <SingleProductWidget id={id} />
      <Features />
        <div className={styles.text}>
            <div className="container">
                {PRODUCT_CARD_CONTENT}
            </div>
        </div>
    </div>    
  );
}
