import {Body, Controller, Get, Inject, Param, Post} from '@nestjs/common';
import {MongodbService} from "../../dao/mongodb/mongodb.service";
import {Database} from "../databases/database.class";

@Controller()
export class DocumentsController {

    @Inject()
    private mongodbService: MongodbService;

    @Get('databases/:databaseId/collections/:collectionId/documents')
    getAllDocuments(
        @Param('databaseId') databaseId,
        @Param('collectionId') collectionId,
        @Body() databaseRequest: Database) {

        return this.mongodbService.getAllDocuments(databaseId, collectionId);
    }

    @Post('databases/:databaseId/collections/:collectionId/documents')
    async createDocument(
        @Param('databaseId') databaseId,
        @Param('collectionId') collectionId,
        @Body() json: any) {

        var documentId = await this.mongodbService.createDocument(databaseId, collectionId, json);
        return {_id: documentId};
    }
}
