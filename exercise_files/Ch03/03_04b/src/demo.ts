type ContactStatus = 'active' | 'inactive' | 'new';

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

interface ContactEvent {
    contactId: Contact['id']; //Matches the type of the id property of the Contact interface which is number
}

interface ContactDeletedEvent extends ContactEvent { }

interface ContactStatusChangedEvent extends ContactEvent {
    oldStatus: Contact['status'];
    newStatus: Contact['status'];
}

interface ContactEvents {
    deleted: ContactDeletedEvent;
    statusChanged: ContactStatusChangedEvent; //this should include the oldStatus and newStatus,contactId
    // ... and so on
}

function getValue<T, U extends keyof T>(source: T, propertyName: U) {
    return source[propertyName];
}

function handleEvent<T extends keyof ContactEvents>(
    //event name should include 'statusChanged' or 'deleted'
    //handler should include the oldStatus and newStatus,contactId if the event name is 'statusChanged'
    eventName: T,
    handler: (event: ContactEvents[T]) => void
) {
    if (eventName === 'statusChanged') {
        handler({
            contactId: 123,
            oldStatus: 'active',
            newStatus: 'inactive',
        });
    }
}
