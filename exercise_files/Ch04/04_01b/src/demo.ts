let x: Record<string, string | number | boolean | Function> = { name: "Wruce Bayne" }
x.number = 1234
x.active = true
x.log = () => console.log("awesome!")


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

// type ContactQuery = Partial<Record<keyof Contact, Query>>;//use Partial to make all properties optional
// type ContactQuery = Omit<
//     Partial<Record<keyof Contact, Query>>,
//     'address' | 'status'
//     >;//Address and status are not optional

type ContactQuery = Partial<
    Pick<
        Record<keyof Contact, Query>,
        'id' | 'name'
    >
>;//Opposite of Omit =use only id and name. In case in the future we add more properties to Contact interface
//if we don't want to use optional properties we can use Required instead of Partial
type RequiredContactQuery = Required<ContactQuery>;//id and name are required

function searchContacts(contacts: Contact[], query: ContactQuery) {
    return contacts.filter(contact => {
        for (const property of Object.keys(contact) as (keyof Contact)[]) {
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
        name: { matches: (name) => name === "Carol Weaver" },
        // status: { matches: (status) => status === "active" },//Error: status is not optional
    }
);