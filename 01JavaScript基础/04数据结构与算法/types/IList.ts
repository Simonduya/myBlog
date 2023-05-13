interface IList<T> {
    isEmpty(): boolean;
    size(): number;
    peek(): T | undefined;   
}

export default IList;