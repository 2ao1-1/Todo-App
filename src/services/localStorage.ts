interface Task {
  id: string;
  text: string;
  complete: boolean;
}

interface TodaList {
  id: string;
  title: string;
  tasks: Task[];
  icon?: string;
}

interface UserData {
  email: string;
  name: string;
  password: string;
  todoLists: TodaList[];
}

// save Data in localstorage
export const saveUserData = (userData: UserData): void => {
  localStorage.setItem(`todo_${userData.email}`, JSON.stringify(userData));
};

// get Data
export const getUserData = (email: string): UserData | null => {
  const data = localStorage.getItem(`todo_${email}`);
  return data ? JSON.parse(data) : null;
};

// verify if the first time sign up or sign up
export const initializeUserData = (user: {
  name: string;
  email: string;
  password: string;
}): UserData => {
  const existingData = getUserData(user.email);
  if (existingData) {
    return existingData;
  }

  const newUserData: UserData = {
    email: user.email,
    name: user.name,
    password: user.password,
    todoLists: [],
  };

  saveUserData(newUserData);
  return newUserData;
};
