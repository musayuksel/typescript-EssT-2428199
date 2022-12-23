interface Contact {
  id: number;
  name: string;
  dob: Date;
  email?: string; //optional
}

interface Address {
  street: string;
  city: string;
  state: string;
  postCode: string;
}

interface contactWithAddress extends Address {
  id: number;
  name: string;
  dob: Date;
  email?: string; //optional
}

const contactWithAddress: contactWithAddress = {
  id: 1,
  name: 'John',
  dob: new Date(),
  street: '123 Main St',
  city: 'Anytown',
  state: 'CA',
  postCode: '12345',
};

const contact: Contact = {
  id: 1,
  name: 'John',
  //   dob: "1980-01-01", //error
  dob: new Date(),
};
