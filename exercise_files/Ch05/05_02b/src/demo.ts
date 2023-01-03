interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isAuthenticated(): boolean {
        return true
    },
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

function authorize(target: any, property: string, descriptor: PropertyDescriptor) {
    // const originalMethod = descriptor.value;

    // descriptor.value = function () {
    //     // ... do something with the original method
    //     // ... and then return the result
    // };

    // return descriptor;

    //return brand new descriptor
    // return {
    //     // ...add all the properties of the original descriptor and add a new value property,
    // } as PropertyDescriptor;
    const originalMethod = descriptor.value;
    descriptor.value = function () {
        if (!currentUser.isAuthenticated()) {
            throw Error("User not authenticated");
        }
        try {
            return originalMethod.apply(this, arguments);

        } catch (error) {
            //TODO: other error handling
            throw error;
        }
    }

}

class ContactRepository {
    private contacts: Contact[] = [];

    @authorize("ContactViewer")
    getContactById(id: number): Contact | null {
        if (!currentUser.isInRole("ContactViewer")) {
            throw Error("User not authorized to execute this action");
        }

        const contact = this.contacts.find(x => x.id === id);
        return contact;
    }

    @authorize("ContactEditor")
    save(contact: Contact): void {
        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }
    }
}