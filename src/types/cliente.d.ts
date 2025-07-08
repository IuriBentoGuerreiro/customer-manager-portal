export interface Cliente {
  id: string;
  nome: string;
  email: string;
  dataNascimento: string;
}

export type ClienteFormular = Omit<Cliente, 'id'>;