import { Collection } from "../collections/collection.interface";
export interface Database {
    name: string;
    collections: Collection[];
}
