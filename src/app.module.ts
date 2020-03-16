import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesController } from './databases/databases.controller';
import { CollectionsController } from './collections/collections.controller';
import { DocumentsController } from './documents/documents.controller';
import { MongodbService } from './mongodb/mongodb.service';
import { MongooseModule } from '@nestjs/mongoose';
import {CatSchema} from "./cats/schema/cats.schema";

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [AppController, DatabasesController, CollectionsController, DocumentsController],
  providers: [AppService, MongodbService],
})
export class AppModule {}
