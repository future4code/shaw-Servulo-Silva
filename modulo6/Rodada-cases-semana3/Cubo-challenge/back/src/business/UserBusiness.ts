import UserData from "../data/UserData";
import { BaseError } from "../error/BaseError";
import { user } from "../types/user";

const userDB = new UserData();

export class UserBusiness {
  constructor(public userData: UserData) {}

  createUser = async (input: user) => {
    try {
        const { first_name, last_name, participation } = input;

      if (!first_name || !last_name || !participation) {
        throw new BaseError(422, "Por favor preencha todos os campos");
      }

      return await userDB.createUser(
        input.first_name,
        input.last_name,
        input.participation,
      );
    } catch (error: any) {
      throw new Error(error.message || "Erro ao criar usuário");
    }
  }

   getUsers = async () => {
    return await userDB.getUsers()

  }
 

}
