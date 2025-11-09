export const formatDate = (str: string) => {
    return new Date(str).toLocaleDateString();
}