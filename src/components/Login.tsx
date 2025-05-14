import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
      });

      console.log('Resposta de login:', response.data); // Log da resposta completa para entender o que está vindo

      const token = response.data.token;

      if (token) {
        console.log('Token gerado:', token);  // Confirma que o token foi recebido
        localStorage.setItem('token', token);  // Salva o token
        navigate('/produtos');  // Redireciona para a página de produtos
      } else {
        setError('Falha ao autenticar');
      }
    } catch (err: any) {
      console.error('Erro ao fazer login:', err); // Log do erro
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
