import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesController } from './databases/databases.controller';
import { CollectionsController } from './collections/collections.controller';
import { DocumentsController } from './documents/documents.controller';
import { MongodbService } from './mongodb/mongodb.service';

@Module({
  imports: [],
  controllers: [AppController, DatabasesController, CollectionsController, DocumentsController],
  providers: [AppService, MongodbService],
})
export class AppModule {}
