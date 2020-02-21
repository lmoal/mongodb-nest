import {Injectable} from '@nestjs/common';
import {Database} from "../databases/database.interface";
import {Collection} from "../collections/collection.interface";

@Injectable()
export class MongodbService {

  private databases: any[] = [];

  /******************************
   *      DATABASE
   * ****************************/

  createDatabase(database: Database) {
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
}
