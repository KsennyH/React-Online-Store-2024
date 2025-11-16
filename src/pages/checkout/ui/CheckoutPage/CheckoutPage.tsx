import { JSX, useState } from "react";
import styles from "./CheckoutPage.module.scss";
import { CheckoutSchema } from "./CheckoutSchema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Title } from "@/shared/ui";
import { useAppDispatch } from "@/shared/lib";
import { clearCart } from "@/features/cart";

// Страница в разработке, нужно разделить на компоненты

export function CheckoutPage(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { register, control, handleSubmit, reset, formState: { isDirty, isSubmitting, errors } } = useForm<CheckoutSchema>({ resolver: zodResolver(CheckoutSchema), mode: "onBlur" });
    const onSubmit: SubmitHandler<CheckoutSchema> = (data) => {
        
        toast.success('Форма успешно отправлена', {
            position: 'top-right',
            duration: 3000
        });
        reset();
        dispatch(clearCart())
        setIsOpen(true);
        setTimeout(() => navigate('/'), 5000);
    }
    
    return(
        <section className={styles.checkout}>
            <div className="container">
                {
                    isOpen && <div style={{backgroundColor: '#fff', maxWidth: '800px', color: '#000', minHeight: '150px', borderRadius: '18px', padding: '40px', textAlign: 'center', margin: '0 auto 40px'}}><div style={{marginBottom: '20px'}}><Title tag="h2">Заказ успешно оформлен!</Title></div>
                    <p>Но бэкенда и тестовой системы оплаты пока нет, возвращайтесь позже!</p>
                    </div>
                }
                <div className={styles.checkout__title}>
                    <Title tag="h1">Оформление заказа</Title>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>Имя:</span>
                        <input className={styles.form__input} {...register('name', { required: true })} type="text" placeholder="Имя" />
                        {errors.name && (
                            <div style={{ color: '#000' }}>
                                {errors.name?.message}
                            </div>
                        )}
                    </label>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>E-mail:</span>
                        <input className={styles.form__input} {...register('email', { required: true })} type="email" placeholder="E-mail" />
                        {errors.email && (
                            <div style={{ color: '#000' }}>
                                {errors.email?.message}
                            </div>
                        )}
                    </label>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>Телефон:</span>
                        <input className={styles.form__input} {...register('phone', { required: true })} type="tel" placeholder="Телефон" />
                        {errors.phone && (
                            <div style={{ color: '#000' }}>
                                {errors.phone?.message}
                            </div>
                        )}
                    </label>
                    <label className={styles.form__label}>
                        <span className={styles.form__title}>Адрес:</span>
                        <input className={styles.form__input} {...register('address')} type="text" placeholder="Адрес" />
                        {errors.address && (
                            <div style={{ color: '#000' }}>
                                {errors.address?.message}
                            </div>
                        )}
                    </label>
                    <label className={styles.form__label}>
                        <Controller 
                            name="check"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <Checkbox
                                    name="Я согласен на обработку персональных данных"
                                    checked={field.value || false}
                                    onChange={(checked) => field.onChange(checked)}
                                />
                            )}
                        />
                        {errors.check && (
                            <div style={{ color: '#000' }}>
                                {errors.check?.message}
                            </div>
                        )}
                    </label>
                    <div className={styles.form__btn}>
                        <Button variant="primary" type="submit" disabled={!isDirty || isSubmitting}>Оформить заказ</Button>
                    </div>
                </form>
            </div>
        </section>
    );
}