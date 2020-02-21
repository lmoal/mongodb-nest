import { Database } from "../databases/database.interface";
import { Collection } from "../collections/collection.interface";
export declare class MongodbService {
    private databases;
    createDatabase(database: Database): void;
    findAllDatabase(): Database[];
    deleteAllDatabase(): void;
    createCollection(collection: Collection): void;
    findAllCollection(databaseName: string): Collection[];
    deleteAllCollection(): void;
}
