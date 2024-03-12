
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Song {
    id: string;
    title?: Nullable<string>;
}

export abstract class IQuery {
    abstract songs(): Song[] | Promise<Song[]>;
}

type Nullable<T> = T | null;
