"use client";

import React, { useEffect, useState } from 'react';
import { Cliente } from '@/types/cliente';
import ClienteLista from '@/components/cliente/ClienteLista';
import Layout from '@/components/comum/Layout';
import { listarClientes } from '@/service/clienteService';

const HomePage: React.FC = () => {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const data = await listarClientes();
        setClientes(data);
      } catch (err) {
        setError('Erro ao carregar clientes.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchClientes();
  }, []);

  if (loading) return <Layout><p>Carregando clientes...</p></Layout>;
  if (error) return <Layout><p style={{ color: 'red' }}>{error}</p></Layout>;

  return (
    <Layout>
      <h1>Lista de Clientes</h1>
      <ClienteLista clientes={clientes} />
    </Layout>
  );
};

export default HomePage;