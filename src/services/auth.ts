interface User {
  name: string;
  email: string;
  password: string;
}

const users: User[] = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    password: "password123",
  },
  {
    name: "Smith John",
    email: "smith.john@example.com",
    password: "passBlueBus",
  },
  {
    name: "Caronlina Adams",
    email: "carolina.adams@example.com",
    password: "passGreenBus",
  },
  {
    name: "Emila Smith",
    email: "emila.smith@example.com",
    password: "12111990",
  },
];

// for sign in
export const authenticateUser = (
  email: string,
  password: string
): User | null => {
  const user = users.find((u) => u.email === email && u.password === password);
  return user || null;
};
