export class Collection {

    private _name: string;
    private _documents: any[]


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get documents(): any[] {
        return this._documents;
    }

    set documents(value: any[]) {
        this._documents = value;
    }
}