import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private products: Product[] = []

    insertProduct(title: string, desc: string, price: number): Product {
        const prodId = new Date().toString();
        const newProduct = new Product(prodId, title, desc, price);

        this.products.push(newProduct);

        return newProduct;
    }

    getProducts() {
        return [...this.products];
    }
}