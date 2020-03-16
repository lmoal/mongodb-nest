import {Injectable} from '@nestjs/common';
import {Database} from "../databases/database.interface";
import {Collection} from "../collections/collection.interface";
import {InjectConnection, InjectModel} from "@nestjs/mongoose";
import {connection, Connection, Model, Schema} from "mongoose";
import {Cat} from "../cats/dto/cat.dto";
import {CreateCatDto} from "../cats/dto/create-cat.dto";

@Injectable()
export class MongodbService {

  constructor(@InjectConnection() private connection: Connection,
              @InjectModel('Cat') private catModel: Model<Cat>) {}

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
    return jp.query(this.databases, '$..'+databaseName);
  }

  deleteAllCollection() {
    this.databases = [];
  }

  /******************************
   *      DOCUMENT
   * ****************************/

  async createDocument(database : Database) {
    let newConnection = this.connection.useDb(database.name);

    let collection = database.collections[0];

    var stuff = {name: collection.name, content: collection.documents}; // Define info.
    var Model = createModelForName(stuff.name, newConnection); // Create the model.
    var model = Model(stuff.content); // Create a model instance.
    model.save(function (err) { // Save
      if (err) {
        console.log(err);
      }
    });

    return null;
  }
}

var establishedModels = {};
function createModelForName(name, connection) {
  if (!(name in establishedModels)) {
    var Any = new Schema({ any: Schema.Types.Mixed });
    establishedModels[name] = connection.model(name, Any);
  }
  return establishedModels[name];
}