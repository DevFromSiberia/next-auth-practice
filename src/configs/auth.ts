import { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { users } from "@/data";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        const user = users.find((user) => credentials?.email === user.email);
        if (user && credentials?.password === user.password) {
          const { password, ...userWithoutPass } = user;
          return userWithoutPass as User;
        }
        return null;
      },
    }),
  ],
};
