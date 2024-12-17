import { createDocument, liveListen } from "../firebase/firebaseTools";

export const createUserInDatabase = ({ firstname, lastname, email }, uid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const payload = {
        firstname,
        lastname,
        email,
        created: new Date(),
      };

      await createDocument("Account", uid, payload);
      resolve;
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

export const liveUserData = (uid, accountAction) => {
  liveListen("Account", uid, accountAction);
};
