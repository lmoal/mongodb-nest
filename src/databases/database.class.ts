import {Collection} from "../collections/collection.class";

export class Database {

  private _name: string;
  private _collections: Collection[];

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get collections(): Collection[] {
    return this._collections;
  }

  set collections(value: Collection[]) {
    this._collections = value;
  }
}
