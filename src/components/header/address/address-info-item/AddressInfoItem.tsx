import styles from "./AddressInfoItem.module.scss";

type AddressInfoItemProps = {
    href: string,
    children: React.ReactNode,
    text: string
}

function AddressInfoItem({ href, children, text }: AddressInfoItemProps) {
    return(
        <a className={styles.addressInfoItem} href={href}>
            {children}
            <span className={styles.addressInfoItem__label}>{text}</span>
        </a>
    );
}

export default AddressInfoItem;