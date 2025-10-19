import Button from "@/components/ui/Button";
import { SERVICE } from "@/constants/service";
import parse from "html-react-parser";
import styles from "./ServicesPage.module.scss";
import Title from "@/components/ui/title/Title";
import { useState } from "react";

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState(1);
    const activeService = SERVICE.find((item) => item.id === activeTab);

    if(!activeService) return;

    return (
        <section className={styles.motoservices}>
           
            <div className="container">
                <div className={styles.motoservices__title}>
                    <Title tag="h1">Сервисный центр “Мотомир” в Иванове</Title>
                    
                </div>
                <div className={styles.motoservices__text}>
                    <p>
                        Мотосервисы компании “Мотомир” предлагают вам полный спектр услуг по сервисному обслуживанию и ремонту мототехники. 
                        Наши сервисы оснащены спец. инструментом и диагностическим оборудованием для проведения системной диагностики, 
                        работ по восстановительному ремонту и  регулярному обслуживанию вашей техники. Механики проходят регулярное 
                        обучение в учебных центрах производителей, подтверждаемую сертификатами, и тестированием их навыков.
                    </p>
                </div>
                <ul className={styles.motoservices__listBtns}>
                    {
                        SERVICE.map((el) => (
                            <li key={el.id}>
                                <Button variant="secondary" isActive={activeTab === el.id} onClick={() => setActiveTab(el.id)} >{el.name}</Button>
                            </li>
                        ))
                    }
                </ul>
                <div className={styles.motoservices__content}>
                    <div className={styles.motoservices__item}>
                        { parse(activeService.description) }
                    </div>
                </div>
            </div>
        </section>
    );
}