import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
     console.log('Token no localStorage:', token);
    
     if (!token) {
      navigate('/login');
      return;
    }

    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProdutos(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {produtos.length === 0 ? (
        <p>Carregando produtos...</p>
      ) : (
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              <strong>{produto.title}</strong><br />
              <img src={produto.image} alt={produto.title} width="100" /><br />
              ${produto.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Produtos;
