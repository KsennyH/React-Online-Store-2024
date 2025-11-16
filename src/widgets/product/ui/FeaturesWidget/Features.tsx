import { CircleMinus, CirclePlus } from "lucide-react";
import styles from "./Features.module.scss";
import { JSX, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Title } from "@/shared/ui";
import { FEATURE } from "@/shared/constants";

export function Features(): JSX.Element {
    const [isOpen, setIsOpen] = useState(true);
    return(
        <div className={styles.feature}>
            <div className="container">
                <div className={styles.top}>
                    <Title tag="h4">Технические характеристики</Title>
                    <button className={styles.btn} type="button" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? <CircleMinus color="#ffffff" /> : <CirclePlus color="#ffffff" />}</button>
                </div>
                <AnimatePresence initial={false}>
                    {
                        isOpen && (
                            <motion.div className={styles.bottom}
                                initial={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                animate={{ height: "auto", opacity: 1, paddingTop: "24px", paddingBottom: "24px" }}
                                exit={{ height: 0, opacity: 0, paddingTop: 0, paddingBottom: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                {
                                    FEATURE.map((el) => (
                                        <div key={el.title} className={styles.featureList}>
                                            <h5 className={styles.title}>{el.title}</h5>
                                            <ul>
                                                {
                                                    el.items.map((el, i:number) => (
                                                        <p key={i} className={styles.item}>{el.label}: {el.value}</p>
                                                    ))
                                                }
                                            </ul>
                                        </div>
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