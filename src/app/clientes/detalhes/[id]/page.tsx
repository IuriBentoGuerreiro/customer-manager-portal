import React from 'react';
import styles from '@/styles/cliente/ClienteDetalhes.module.css';
import Layout from '@/components/comum/Layout';
import { Cliente } from '@/types/cliente';
import { buscarClientePorId } from '@/service/clienteService';

interface ClienteDetalhesPaginaProps {
  params: { id: string };
}

export default async function ClienteDetalhesPaginaProps({ params }: ClienteDetalhesPaginaProps) {
  let cliente: Cliente | null = null;
  let error = '';

  try {
    cliente = await buscarClientePorId(params.id);
  } catch (err) {
    console.error('Erro ao buscar cliente:', err);
    error = 'Não foi possível carregar os detalhes do cliente.';
  }

  if (error) {
    return <Layout><p style={{ color: 'red' }}>{error}</p></Layout>;
  }

  if (!cliente) {
    return <Layout><p>Cliente não encontrado.</p></Layout>;
  }

  return (
    <Layout>
      <h1>Detalhes do Cliente</h1>
      <div className={styles.detailsContainer}>
        <p><strong>ID:</strong> {cliente.id}</p>
        <p><strong>Nome:</strong> {cliente.nome}</p>
        <p><strong>Email:</strong> {cliente.email}</p>
        <p><strong>Data de Nascimento:</strong> {cliente.dataNascimento}</p>
      </div>
    </Layout>
  );
}
