type ContactName = string;

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

type ContactStatusType = "active" | "inactive" | "new";//union type

type ContactDoB = Date | number | string;//union type, because we will handle 3 different types of data in the function
interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactDoB;
    // status?: ContactStatus;
    status?: ContactStatusType;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

type ContactWithAddress = Contact & Address;//intersection type

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: 'active'//It will directly suggest the values of the type=> 'active' | 'inactive' | 'new'
}
