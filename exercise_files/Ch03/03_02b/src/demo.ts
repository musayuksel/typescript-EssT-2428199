type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

type ContactFields = keyof Contact;//keyof operator

const contactFields: ContactFields = "name";//It will directly suggest the values of the type=> 'id' | 'name' | 'birthDate' | 'status'

function advanceUsage(sourceObj, propertyName: keyof Contact) {
    return sourceObj[propertyName];
}
advanceUsage(primaryContact, "name");//Only the properties of the Contact type will be suggested

function moreAdvanceUsage<T, K extends keyof T>(sourceObj: T, propertyName: K) {
    return sourceObj[propertyName];
}
moreAdvanceUsage(primaryContact, "name");
moreAdvanceUsage({min: 10, max: 20},"max");// will suggest "min" | "max