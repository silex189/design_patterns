import {Iterator} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Concept/code/iterators/Iterator";
import {
    WordsCollection
} from "src/Basic_Patterns/Behavioural_Patterns/Iterator/Concept/code/collections/WordsCollection";

/** Concrete Iterator */
class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection;

    private position: number = 0;

    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind(): void {
        this.position = this.reverse ? this.collection.getCount() - 1 : 0;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

export { AlphabeticalOrderIterator };