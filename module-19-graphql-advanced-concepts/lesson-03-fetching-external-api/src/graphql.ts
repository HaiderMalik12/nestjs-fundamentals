
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Status {
    NEW = "NEW",
    RELEASED = "RELEASED",
    FAILED = "FAILED"
}

export class ProductInput {
    name: string;
    qty?: Nullable<number>;
    status?: Nullable<Status>;
}

export class Owner {
    _id: string;
    name: string;
}

export class Product {
    _id?: Nullable<string>;
    name: string;
    qty?: Nullable<number>;
    owner: Owner;
    status?: Nullable<Status>;
}

export abstract class IQuery {
    abstract product(_id?: Nullable<string>): Product | Promise<Product>;

    abstract products(): Nullable<Product>[] | Promise<Nullable<Product>[]>;

    abstract todos(): Todo[] | Promise<Todo[]>;
}

export abstract class IMutation {
    abstract createProduct(input: ProductInput): Product | Promise<Product>;

    abstract updateProduct(_id: string, input: ProductInput): Product | Promise<Product>;

    abstract deleteProduct(_id: string): Product | Promise<Product>;
}

export class Todo {
    id: string;
    userId: number;
    title: string;
    completed?: Nullable<boolean>;
}

type Nullable<T> = T | null;
