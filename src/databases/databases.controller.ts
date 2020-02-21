import {Body, Controller, Delete, Get, Inject, Post, Req} from '@nestjs/common';
import {MongodbService} from "../mongodb/mongodb.service";
import {Database} from "./database.interface";

@Controller('databases')
export class DatabasesController {

  @Inject()
  private mongodbService : MongodbService;

  @Get()
  getDatabases(): Database[] {
    return this.mongodbService.findAllDatabase();
  }

  @Post()
  createDatabase(@Body() body : string) {
    const database: Database = {} as any;
    database.name = body;
    return this.mongodbService.createDatabase(database);
  }

  @Delete()
  deleteDatabase() {
    return this.mongodbService.deleteAllDatabase();
  }
}
