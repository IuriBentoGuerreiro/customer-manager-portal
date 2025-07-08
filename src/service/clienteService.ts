import { Cliente, ClienteFormular } from '@/types/cliente';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/bff';

export const listarClientes = async (): Promise<Cliente[]> => {
  const response = await axios.get<Cliente[]>(`${API_BASE_URL}/clientes`);
  return response.data;
};

export const buscarClientePorId = async (id: string): Promise<Cliente> => {
  const response = await axios.get<Cliente>(`${API_BASE_URL}/clientes/${id}`);
  return response.data;
};

export const criarCliente = async (clienteData: ClienteFormular): Promise<Cliente> => {
  const response = await axios.post<Cliente>(`${API_BASE_URL}/clientes`, clienteData);
  return response.data;
};