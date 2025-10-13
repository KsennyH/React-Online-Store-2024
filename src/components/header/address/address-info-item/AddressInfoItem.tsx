import styles from "./AddressInfoItem.module.scss";

type AddressInfoItemProps = {
    href: string,
    src: string,
    text: string
}

function AddressInfoItem({ href, src, text }: AddressInfoItemProps) {
    return(
        <a className={styles.addressInfoItem} href={href}>
            <img className={styles.addressInfoItem__icon} src={src} alt="Иконка"/>
            <span className={styles.addressInfoItem__label}>{text}</span>
        </a>
    );
}

export default AddressInfoItem;