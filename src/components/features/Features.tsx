import { CircleMinus, CirclePlus } from "lucide-react";
import styles from "./Features.module.scss";
import { FEATURE } from "@/constants/feature";
import FeaturesList from "./features-list/FeaturesList";
import { JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Features(): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);
    return(
        <div className={styles.feature}>
            <div className="container">
                <div className={styles.feature__top}>
                    <h4 className={styles.feature__title}>Технические характеристики</h4>
                    <button type="button" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? <CircleMinus color="#ffffff" /> : <CirclePlus color="#ffffff" />}</button>
                </div>
                <AnimatePresence initial={false}>
                    {
                        isOpen && (
                            <motion.div className={styles.feature__bottom}
                                initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                animate={{ height: "auto", opacity: 1, paddingTop: "24px", paddingBottom: "24px" }}
                                exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                {
                                    FEATURE.map((el) => (
                                        <FeaturesList key={el.title} title={el.title} feature={el.items} />   
                                    ))
                                }
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Features;