import React from 'react';
import Link from 'next/link';
import { Cliente } from '@/types/cliente';
import styles from '@/styles/cliente/ClienteLista.module.css'; 

interface ClienteListaProps {
  clientes: Cliente[];
}

const ClienteLista: React.FC<ClienteListaProps> = ({ clientes }) => {
  if (clientes.length === 0) {
    return <p>Nenhum cliente cadastrado ainda.</p>;
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Data de Nascimento</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map((cliente) => (
          <tr key={cliente.id}>
            <td>{cliente.nome}</td>
            <td>{cliente.email}</td>
            <td>{cliente.dataNascimento}</td>
            <td>
              <Link href={`/clientes/detalhes/${cliente.id}`} className={styles.detailsLink}>
                Ver Detalhes
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClienteLista;