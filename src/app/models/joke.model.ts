export interface Joke {
    category: string;
    type: string;
    setup: string;
    delivery: string;
    flags: flag;
    id: number,
    error: boolean
}
export interface flag {
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
}