export type LibraryItem = {
    id: string;
    title: string;
    img: string;
    status: "downloaded" | "processing" | "new"
}