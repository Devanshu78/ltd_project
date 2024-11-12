import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authConfig: NextAuthOptions = {
  secret: process.env.AUTH_SECRET as string,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("Redirect URL:", url); // For debugging
      console.log("Base URL:", baseUrl); // For debugging
      return url.startsWith(baseUrl) ? baseUrl + "/otpverification" : url;
    },
  },
};
