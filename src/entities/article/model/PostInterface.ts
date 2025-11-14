export interface PostInterface {
    id: number,
    title: string,
    image: string,
    intro: string,
    authors: { name: string, avatar?: string },
    created_at: string,
}

export interface SinglePostInterface {
    id: number,
    title: string,
    image: string,
    intro: string,
    content: string,
    authors: { name: string, avatar?: string },
    categories?: { id: number, name: string, news: {id: number}[] };
    created_at: string,
}