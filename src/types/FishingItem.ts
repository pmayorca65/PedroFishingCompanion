export interface FishingItem {

    id: string;

    category: string;

    // Universal fields

    type: string;

    style: string;

    brand: string;

    model: string;

    size: string;

    weight: string;

    length: string;

    depth: string;

    color: string;

    quantity: number;

    notes: string;

    image: string | null;

    favorite: boolean;

}