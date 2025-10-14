export type NavItem = {
    title: string,
    path: string
}

export const NAVIGATION: NavItem[] = [
    {
        title: "Каталог",
        path: "/",
    },
    {
        title: "Сервис",
        path: "/services",
    },
    {
        title: "Контакты",
        path: "/contacts",
    },
]