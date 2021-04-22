import { Request, Response } from "express"
import { UserService } from "../services/UserService"


class UsersController {
  async create(request: Request, response: Response): Promise<Response> {
    const usersService = new UserService();

    const { email } = request.body;

    const user = await usersService.create(email);

    return response.json(user);
  }
}

export { UsersController }