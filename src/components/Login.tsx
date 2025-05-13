import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarioSalvo = localStorage.getItem('usuario');

    if (usuarioSalvo) {
      const { email: emailSalvo, senha: senhaSalva } = JSON.parse(usuarioSalvo);

      if (email === emailSalvo && senha === senhaSalva) {
        localStorage.setItem('token', 'fake-jwt-token');
        navigate('/produtos');
      } else {
        setErro('E-mail ou senha incorretos.');
      }
    } else {
      setErro('Usuário não encontrado. Cadastre-se primeiro.');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8} width="300px" mx="auto">
      <Typography variant="h4">Login</Typography>

      {erro && <Alert severity="error" sx={{ mt: 2 }}>{erro}</Alert>}

      <TextField
        label="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Senha"
        type="password"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        margin="normal"
        fullWidth
      />

      <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
        Entrar
      </Button>

      <Button color="secondary" onClick={() => navigate('/cadastro')} sx={{ mt: 1 }}>
        Criar Conta
      </Button>
    </Box>
  );
};

export default Login;
