import { Injectable } from '@nestjs/common';
import connection from '../database/connection';
import { UserRepository } from './user-module.respository'

const userRepository = new UserRepository(connection)
@Injectable()
class UserModuleService {
  // connect with database
  async getUser(payload) {
    const { page } = payload;
    if (page >= 1) {
      return await userRepository.getUserWithPagination(payload)
    }
    return await userRepository.getUser(payload)
  }

  async postUser(payload) {
    return await userRepository.postUser(payload)
  }

  async putUser(payload, id: number) {
    return await userRepository.putUser(payload, id)
  }

  async deleteUser(id: number) {
    return await userRepository.deleteUser(id)
  }
}

export default new UserModuleService();
