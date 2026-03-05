export type UserType = {
  username: string;
  activity: string;
  when: string;
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  birthday: Date;
  lname: string;
  phone: string;
  uname: string;
};

export type BodyType = {
  users: UserType[];
};
