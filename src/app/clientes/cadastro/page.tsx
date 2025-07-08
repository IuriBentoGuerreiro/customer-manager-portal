"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/comum/Layout';
import ClienteFormulario from '@/components/cliente/ClienteFormulario';
import { ClienteFormular } from '@/types/cliente';
import { criarCliente } from '@/service/clienteService';

const NovoClientePagina: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (data: ClienteFormular) => {
    try {
      await criarCliente(data);
      alert('Cliente cadastrado com sucesso!');
      router.push('/');
    } catch (error) {
      alert('Erro ao cadastrar cliente. Verifique o console.');
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <Layout>
      <h1>Cadastrar Novo Cliente</h1>
      <ClienteFormulario onSubmit={handleSubmit} />
    </Layout>
  );
};

export default NovoClientePagina;