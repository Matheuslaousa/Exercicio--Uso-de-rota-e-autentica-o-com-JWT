import { useEffect, useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Container, Typography, Button
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

const cidades = ['São Paulo', 'Rio de Janeiro', 'Curitiba', 'Salvador'];
const statusOptions = ['Enviado', 'Completo', 'Pendente'];

export default function ProductPage() {
  const [produtos, setProdutos] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/');

    axios.get('https://fakestoreapi.com/products', {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => setProdutos(res.data))
      .catch(() => alert('Erro ao carregar produtos.'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4">Produtos</Typography>
      <Button onClick={handleLogout} variant="outlined" color="error" sx={{ mb: 2 }}>Logout</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Quantidade</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Valor (R$)</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {produtos.map(prod => (
              <TableRow key={prod.id}>
                <TableCell>{Math.floor(Math.random() * 10) + 1}</TableCell>
                <TableCell><img src={prod.image} alt={prod.title} width="40" /> {prod.title}</TableCell>
                <TableCell>{cidades[Math.floor(Math.random() * cidades.length)]}</TableCell>
                <TableCell>{prod.price.toFixed(2)}</TableCell>
                <TableCell>{statusOptions[Math.floor(Math.random() * statusOptions.length)]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
