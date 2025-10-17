import { JSX } from "react";
import styles from "./FeaturesList.module.scss";

type Feature = {
    label: string,
    value: string
}

interface FeatureListProps {
    title: string,
    feature: Feature[]
}

function FeaturesList({ title, feature }: FeatureListProps): JSX.Element {
    return(
        <div className={styles.featureList}>
            <h5 className={styles.featureList__title}>{title}</h5>
            <ul>
                {
                    feature.map((el, i:number) => (
                        <p key={i} className={styles.featureList__item}>{el.label}: {el.value}</p>
                    ))
                }
            </ul>
        </div>
    );
}

export default FeaturesList;