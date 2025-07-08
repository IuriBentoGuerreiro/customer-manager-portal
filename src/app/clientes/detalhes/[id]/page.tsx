import { buscarClientePorId } from '@/service/clienteService';
import Layout from '@/components/comum/Layout';
import styles from '@/styles/cliente/ClienteDetalhes.module.css';
import { Cliente } from '@/types/cliente';

interface ClienteDetalhesPaginaProps {
  params: Promise<{ id: string }>;
}

export default async function PaginaDetalhesCliente({ params }: ClienteDetalhesPaginaProps) {
  const { id } = await params;

  let cliente: Cliente | null = null;
  let error = '';

  try {
    cliente = await buscarClientePorId(id);
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
