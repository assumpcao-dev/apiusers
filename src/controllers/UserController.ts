import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser =  new CreateUserService()

    const user = await createUser.execute({
      name,
      email,
      password,
    })

    return response.json(user)
  }
}