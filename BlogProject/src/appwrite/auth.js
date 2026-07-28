// first we import config for env variables which declared in this
import config from "../config/config";
// this is the appwrite library which give us the Client, Account, ID
import { Client, Account, ID } from "appwrite";

// this is the class where all things about the auth is managed like
// we created class so it all times create their new object which we exports below
export class AuthService {
  // as per the appwrite documentation of the auth we creates the client
  client = new Client();
  // also we declare the account variable and not assign the value in this
  // because it takes the client as a argument so we give it with the contructor using the this keyword
  account;

  constructor() {
    const endpoint = config.appwriteUrl || `${window.location.origin}/v1`;

    this.client.setEndpoint(endpoint).setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // now if we create the function like this so this is not dependent on any
  // so it will not give error like if we moving firebase from the appwrite

  // now this is to sign up the user
  // in documentation we have the promises so we can use async also for better redabilty
  async createAccount({ email, password, name }) {
    try {
      // now this is also the inbuilt function of the appwrite like create
      // ID.unique() generated the random id
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        // call another method
        // if exist then also do login for that
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Error while Signup", error);
    }
  }

  // login function
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Error while login", error);
    }
  }

  // Current Logged in user
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error while getting the user", error);
    }
    return null;
  }

  // Log out function
  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log("Error while logout", error);
    }
  }
}

// here we created the object of the AuthService class and export this
const authService = new AuthService();

export default authService;
