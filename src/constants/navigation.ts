export type NavItem = {
    title: string,
    path: string
}

export const NAVIGATION: NavItem[] = [
    {
        title: "Главная",
        path: "/",
    },
    {
        title: "Каталог",
        path: "/products",
    },
    {
        title: "Блог",
        path: "/blog",
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