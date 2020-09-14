import { Injectable } from '@nestjs/common';
import connection from '../database/connection';

@Injectable()
class UserModuleService {
  // connect with database
  async getUser(payload: any) {
    const { page } = payload;
    let response;
    if (page >= 1) {
      response = await connection('user')
        .limit(10)
        .offset((page - 1) * 10)
        .select('*')
        .orderBy('id');
      return response;
    }
    response = await connection('user')
      .select('*')
      .orderBy('id');
    return response
  }

  async postUser(payload) {
    const response = await connection('user')
      .returning('*')
      .insert(payload);
    return response;
  }

  async putUser(payload, id) {
    const response = await connection('user')
      .where('id', id)
      .update(payload);
    return response;
  }

  async deleteUser(id) {
    const response = await connection('user')
      .where('id', id)
      .delete();
    return response;
  }
}

export default new UserModuleService();
