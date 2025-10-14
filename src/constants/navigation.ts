export type NavItem = {
    link: string,
    path: string
}

export const NAVIGATION: NavItem[] = [
    {
        link: "Каталог",
        path: "/",
    },
    {
        link: "Сервис",
        path: "/services",
    },
    {
        link: "Контакты",
        path: "/contacts",
    },
]