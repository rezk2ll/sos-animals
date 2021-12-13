import nextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default nextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // @ts-ignore
      scope: "read:user",
    })
  ],

  secret: process.env.SECRET,
  
  session: {
    strategy: 'jwt'
  },

  jwt: {
    secret: process.env.SECRET
  }
});
