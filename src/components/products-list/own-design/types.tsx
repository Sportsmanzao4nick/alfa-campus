export interface Data {
    id: number,
    title: string,
    description: string,
    products: [{
        id: number,
        preview: string,
        images: [],
        title: string,
        subtitle: string,
        price: number,
        description: string,
        colors: [],
        sizes: [],
        stickerNumbers: [],
        availability: boolean
    }]
}