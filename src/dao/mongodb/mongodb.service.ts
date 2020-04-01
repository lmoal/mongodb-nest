import {Injectable} from '@nestjs/common';
import {Database} from "../../routes/databases/database.interface";
import {Collection} from "../../routes/collections/collection.interface";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {Connection, Model, Schema} from "mongoose";
import {Cat} from "../../model/cats/dto/cat.dto";
import {resolve} from "dns";

@Injectable()
export class MongodbService {

    constructor(@InjectConnection() private connection: Connection,
                @InjectModel('Cat') private catModel: Model<Cat>) {
    }

    private databases: any[] = [];

    /******************************
     *      DATABASE
     * ****************************/

    createDatabase(database: Database) {
        console.log('database' + JSON.stringify(database))
        this.databases.push(database);
    }

    findAllDatabase(): Database[] {
        return this.databases;
    }

    deleteAllDatabase() {
        this.databases = [];
    }

    /******************************
     *      COLLECTION
     * ****************************/

    createCollection(collection: Collection) {
        this.databases.push(collection);
    }

    findAllCollection(databaseName: string): Collection[] {
        var jp = require('jsonpath');
        return jp.query(this.databases, '$..' + databaseName);
    }

    deleteAllCollection() {
        this.databases = [];
    }

    /******************************
     *      DOCUMENT
     * ****************************/

    async getAllDocuments(databaseName: string, collectionName: string,) {

        let mongoose = this.connection.useDb(databaseName);

        var Model = mongoose.model(collectionName, new Schema({any: Schema.Types.Mixed}));

        return Model.find({}, function (err, doc) {
            console.log((doc))
        });
    }

    async createDocument(databaseName: string, collectionName: string, json: any) {

        let mongoose = this.connection.useDb(databaseName);

        var Model = mongoose.model(collectionName, new Schema({any: Schema.Types.Mixed}, { strict: false }));

        let model = new Model(json);

        Model.create(model, function (err, doc) {
            console.log(doc)
        });

        return model.id;
    }
}

var establishedModels = {};

function createModelForName(name, connection) {
    if (!(name in establishedModels)) {
        var Any = new Schema({any: Schema.Types.Mixed});
        establishedModels[name] = connection.model(name, Any);
    }
    return establishedModels[name];
}