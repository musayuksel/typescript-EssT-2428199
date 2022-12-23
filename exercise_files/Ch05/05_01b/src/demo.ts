interface Contact {
    id: number;
}

const currentUser = {
    id: 1234,
    roles: ["ContactEditor"],
    isInRole(role: string): boolean {
        return this.roles.contains(role);
    }
}

@log
class ContactRepository {
    private contacts: Contact[] = [];

    getContactById(id: number): Contact | null {
        // console.trace(`ContactRepository.getContactById: BEGIN`);
        //logging the method name, duplicate code

        @authorize('ContactViewer')
        // if (!currentUser.isInRole("ContactViewer")) {
        //     throw Error("User not authorized to execute this action");
        // }//it is checking the role of the user, duplicate code

        const contact = this.contacts.find(x => x.id === id);

        console.debug(`ContactRepository.getContactById: END`);

        return contact;
    }

    save(contact: Contact): void {
        // console.trace(`ContactRepository.save: BEGIN`);
  //logging the method name, duplicate code

        @authorize('ContactEditor')
        // if (!currentUser.isInRole("ContactEditor")) {
        //     throw Error("User not authorized to execute this action");
        // }//it is checking the role of the user

        const existing = this.getContactById(contact.id);

        if (existing) {
            Object.assign(existing, contact);
        } else {
            this.contacts.push(contact);
        }

        console.debug(`ContactRepository.save: END`);
    }
}