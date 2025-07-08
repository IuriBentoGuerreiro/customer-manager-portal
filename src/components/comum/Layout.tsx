import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/comum/Layout.module.css'; 

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/clientes" className={styles.navLink}>
            Início (Clientes)
          </Link>
          <Link href="/clientes/cadastro" className={styles.navLink}>
            Cadastrar Cliente
          </Link>
        </nav>
      </header>
      <main className={styles.mainContent}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2025 Gerenciador de Clientes</p>
      </footer>
    </div>
  );
};

export default Layout;