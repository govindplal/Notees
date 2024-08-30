import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import MicrosoftProvider from "next-auth/providers/microsoft";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        MicrosoftProvider({
            clientId: process.env.MICROSOFT_CLIENT_ID,
            clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
        }),
    ],
    // Optional: Add a database adapter here if needed
    // database: process.env.DATABASE_URL,
    pages: {
        signIn: '/auth/signin', // Custom sign-in page if needed
    },
    // callbacks: {
    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.id = user.id; // Add user ID to the token
    //         }
    //         return token;
    //     },
    //     async session({ session, token }) {
    //         session.user.id = token.id; // Add user ID to the session
    //         return session;
    //     },
    // },
});