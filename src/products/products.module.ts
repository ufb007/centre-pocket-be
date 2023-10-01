import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controllers";
import { ProductsService } from "./products.service";

@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService]
})

export class ProductsModule {}