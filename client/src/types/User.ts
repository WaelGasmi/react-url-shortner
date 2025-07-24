export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type UserLogin = Pick<User, "email" | "password">;

export type UserSignup = Omit<User, "_id">;
