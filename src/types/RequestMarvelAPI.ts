import { Character } from "./Character";

export interface RequestMarvelAPI<T> {
    results: T[],
    total: number
}