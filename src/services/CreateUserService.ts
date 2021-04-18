import AppError from '../shared/errors/AppError';

import { getCustomRepository } from "typeorm";
import UserRepository from '../repositories/UserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  
}

export default class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UserRepository)
    const emailExists = await userRepository.findByEmail(email);

    if(emailExists) {
      throw new AppError('The email is already in use.')
    }

    const user = userRepository.create({
      name,
      email,
      password,
    })

    await userRepository.save(user);
  }
}