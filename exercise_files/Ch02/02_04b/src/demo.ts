interface Contact {
    id: number;
    name: ContactName;
    birthDate?: Date;
    status?: contactStatus;
}

enum contactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new",
}

let primaryContact: Contact = {
    birthDate: new Date("01-01-1980"),
    id: 12345,
    name: "Jamie Johnson",
    status: contactStatus.Active
}

type ContactName = string