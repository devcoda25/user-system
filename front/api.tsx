import axios from 'axios';
import { CreateUserDTO } from '../back/src/user/dto/create-user.dto';
import { UserType} from '../back/src/user/user.entity'


const BACKEND_URL = process.env.BACKENK_URL ?? 'http://localhost:3000/users';

export async function register(createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
  const response = await axios.post(`${BACKEND_URL}/register`, createUserDTO);
  return response.data;
}


export async function login(loginDTO: { email: string; password: string }) {
  const response = await axios.post(`${BACKEND_URL}/login`, loginDTO);

  return response.data;
}

export async function paginateUsers(page: number = 1, limit: number = 10) {
  const response = await axios.get(`${BACKEND_URL}/paginate?page=${page}&limit=${limit}`);

  return response.data;
}

export async function getUserById(id: number) {
  const response = await axios.get(`${BACKEND_URL}/${id}`);

  return response.data;
}

export async function resetPassword(email: string) {
  await axios.post(`${BACKEND_URL}/reset-password`, { email });
}

export async function editUser(id: number, createUserDTO: CreateUserDTO) {
  const response = await axios.patch(`${BACKEND_URL}/${id}`, createUserDTO);

  return response.data;
}

export async function filterUser(params: any) {
  const response = await axios.get(`${BACKEND_URL}/filter`, { params });

  return response.data;
}

export async function paginateUser(page: number, limit: number) {
  const response = await axios.get(`${BACKEND_URL}/paginate?page=${page}&limit=${limit}`);

  return response.data;
}

export async function deleteUser(id: number) {
  await axios.delete(`${BACKEND_URL}/${id}`);
}
