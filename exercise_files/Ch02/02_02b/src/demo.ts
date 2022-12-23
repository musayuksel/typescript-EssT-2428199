interface Contact {
  id: number;
  name: string;
  dob: Date;
  email?: string; //optional
}

const contact: Contact = {
  id: 1,
  name: 'John',
  //   dob: "1980-01-01", //error
  dob: new Date(),
};
