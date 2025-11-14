export interface ProductVariant {
    article: string,
    available: boolean, 
    color: string,
    images: string[],
    stock: number
}

export type NavItem = {
    title: string,
    path: string
}

export interface FooterNav {
    category: string,
    links: NavItem[]
}