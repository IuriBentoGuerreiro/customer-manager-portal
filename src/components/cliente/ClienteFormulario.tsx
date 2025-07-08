import React, { useState } from 'react';
import { ClienteFormular } from '@/types/cliente';
import styles from '@/styles/cliente/ClienteFormulario.module.css'; 

interface ClienteFormularioProps {
  onSubmit: (data: ClienteFormular) => void;
  initialData?: ClienteFormular;
}

const ClienteFormulario: React.FC<ClienteFormularioProps> = ({ onSubmit, initialData }) => {
  const [nome, setNome] = useState(initialData?.nome || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [dataNascimento, setDataNascimento] = useState(initialData?.dataNascimento || '');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!nome.trim()) newErrors.nome = 'Nome é obrigatório.';
    if (!email.trim()) newErrors.email = 'Email é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email inválido.';
    if (!dataNascimento.trim()) newErrors.dataNascimento = 'Data de Nascimento é obrigatória.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    onSubmit({ nome, email, dataNascimento });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
  <div className={styles.formGroup}>
    <label htmlFor="nome">Nome:</label>
    <input
      type="text"
      id="nome"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
    />
    {errors.nome && <p className={styles.errorText}>{errors.nome}</p>}
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
    />
    {errors.email && <p className={styles.errorText}>{errors.email}</p>}
  </div>

  <div className={styles.formGroup}>
    <label htmlFor="dataNascimento">Data de Nascimento:</label>
    <input
      type="date"
      id="dataNascimento"
      value={dataNascimento}
      onChange={(e) => setDataNascimento(e.target.value)}
      className={`${styles.input} ${errors.dataNascimento ? styles.inputError : ''}`}
    />
    {errors.dataNascimento && <p className={styles.errorText}>{errors.dataNascimento}</p>}
  </div>

  <button type="submit" className={styles.submitButton}>Salvar Cliente</button>
</form>
  );
};

export default ClienteFormulario;