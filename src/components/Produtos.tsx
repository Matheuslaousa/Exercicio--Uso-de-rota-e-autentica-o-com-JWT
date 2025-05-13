import React from 'react';
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Produto {
  nome: string;
  quantidade: number;
  cidade: string;
  valor: number;
  status: 'Enviado' | 'Não enviado';
}

const produtos: Produto[] = [
  { nome: 'Jaqueta', quantidade: 12, cidade: 'São Paulo', valor: 199.90, status: 'Enviado' },
  { nome: 'Camiseta', quantidade: 25, cidade: 'Rio de Janeiro', valor: 59.90, status: 'Não enviado' },
  { nome: 'Calça', quantidade: 10, cidade: 'Curitiba', valor: 149.90, status: 'Enviado' },
  { nome: 'Sapatos', quantidade: 8, cidade: 'Belo Horizonte', valor: 249.90, status: 'Não enviado' },
];

const Produtos: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Box mt={8} px={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Produtos</Typography>
        <Button variant="outlined" color="error" onClick={handleLogout}>
          Sair
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Produto</strong></TableCell>
              <TableCell><strong>Quantidade</strong></TableCell>
              <TableCell><strong>Cidade</strong></TableCell>
              <TableCell><strong>Valor (R$)</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map((produto, index) => (
              <TableRow key={index}>
                <TableCell>{produto.nome}</TableCell>
                <TableCell>{produto.quantidade}</TableCell>
                <TableCell>{produto.cidade}</TableCell>
                <TableCell>{produto.valor.toFixed(2)}</TableCell>
                <TableCell>{produto.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Produtos;
