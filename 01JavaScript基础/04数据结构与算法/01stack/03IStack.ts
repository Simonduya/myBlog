import IList from "../types/IList";

interface IStack<T> extends IList<T> {
    push(el: T): void;
    pop(): T | undefined;
}

export default IStack