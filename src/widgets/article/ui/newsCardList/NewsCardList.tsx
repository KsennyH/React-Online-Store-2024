import styles from './NewsCardList.module.scss';
import { ErrorMessage, LinkButton, Title } from '@/shared/ui';
import Skeleton from 'react-loading-skeleton';
import { JSX } from 'react';
import { NewsCardMain, useGetLatestNewsQuery } from '@/entities/article';

export function NewsCardList(): JSX.Element {
    
    const { data, isLoading, error } = useGetLatestNewsQuery();
    
    if(error) { 
        console.error('Ошибка при загрузке новостей:', error);
        return <ErrorMessage text="Не удалось загрузить новости. Попробуйте позже." />        
    }

    return(
        <section className={styles.motoNews}>
            <div className={styles.title}>
                <Title tag='h2'>Новости и статьи</Title>
            </div>
            <ul className={styles.list}>
                {
                    isLoading ? [...Array(6)].map((_, i: number) => (
                        <li key={i} className={styles.item} >
                            <Skeleton height={416} style={{borderRadius: 18}} />
                        </li>
                    )) :
                    data && data.length > 0 && data.map((el) => (
                        <li key={el.id}>
                            <NewsCardMain {...el} />
                        </li>
                    ))
                }   
            </ul>
            <div className={styles.btn}>
                <LinkButton href='/blog' size='lg'>Все новости</LinkButton>
            </div>
        </section>
    );
}