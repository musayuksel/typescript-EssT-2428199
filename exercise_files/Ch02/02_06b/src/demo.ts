interface Contact {
    id: number;
    name: string;
}

function clone<T>(source: T): T {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)

const objectWithDifferentType = clone({ startDate: new Date() });//all generics <t> will be {startDate: Date}

function cloneAdvance<T1, T2 extends T1>(source: T1): T2 {
    // return type T2 must be a subtype of T1, plus I can add more properties to T2
    return Object.apply({}, source);
}