let x : Record<string,string|number>={ name: "Wruce Bayne" };
x.id = 1234;
x[5]="five";
//key should be string and value should be string or number


////////////////////

type ContactStatus = "active" | "inactive" | "new";

interface Address {
    street: string;
    province: string;
    postalCode: string;
}

interface Contact {
    id: number;
    name: string;
    status: ContactStatus;
    address: Address;
}

interface Query {
    sort?: 'asc' | 'desc';
    matches(val): boolean;
}

// function searchContacts(contacts: Contact[], query) {//query is any type
// function searchContacts(contacts: Contact[], query:Record<string,Query>) {//query can be any object with string keys and Query values
function searchContacts(contacts: Contact[], query:Record<keyof Contact,Query>) {//query must be an object with Contact keys and Query values
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {//I did't understand this line
            // get the query object for this property
            const propertyQuery = query[property];
            // check to see if it matches
            if (propertyQuery && propertyQuery.matches(contact[property])) {
                return true;
            }
        }

        return false;
    })
}

const filteredContacts = searchContacts(
    [/* contacts */],
    {
        id: { matches: (id) => id === 123 },
        name: { matches: (name) => name === "Carol Weaver"},
        // phoneNumber: { matches: (name) => name === "Carol Weaver" },//We solved this problem by using keyof Contact
    }
);