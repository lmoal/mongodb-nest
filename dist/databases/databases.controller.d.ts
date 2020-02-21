import { Database } from "./database.interface";
export declare class DatabasesController {
    private mongodbService;
    getDatabases(): Database[];
    createDatabase(body: string): void;
    deleteDatabase(): void;
}
