interface Contact {
    id: number;
    name: string;
    cloneMethod: () => Contact;
    cloneMethod2(contact): Contact;
}

function clone(source: Contact): Contact {
    return Object.apply({}, source);
}

function cloneWithFunctionArguments(source: Contact, cb: () => Contact): Contact {
    return Object.apply({}, source);
}