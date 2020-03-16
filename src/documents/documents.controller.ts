import {Body, Controller, Inject, Post} from '@nestjs/common';
import {MongodbService} from "../mongodb/mongodb.service";
import {Database} from "../databases/database.class";
import {Collection} from "../collections/collection.class";

@Controller('documents')
export class DocumentsController {


    @Inject()
    private mongodbService: MongodbService;

    @Post()
    createDocuments(@Body() databaseRequest: Database) {

        let database = new Database();
        database.name = 'ob-team-1';
        database.collections = [];
        var collection = new Collection();
        collection.name = 'cats';
        collection.documents = [{name: 'minou'}];
        database.collections[0] = collection;

        return this.mongodbService.createDocument(database);
    }
}
