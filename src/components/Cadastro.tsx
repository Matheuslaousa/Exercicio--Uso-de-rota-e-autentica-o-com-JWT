import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';

const Cadastro: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    const usuario = { email, senha };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    navigate('/login');
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={8} width="300px" mx="auto">
      <Typography variant="h4">Criar Conta</Typography>

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

      <Button variant="contained" color="primary" onClick={handleCadastro} sx={{ mt: 2 }}>
        Cadastrar
      </Button>

      <Button color="secondary" onClick={() => navigate('/login')} sx={{ mt: 1 }}>
        Já tem conta? Faça login
      </Button>
    </Box>
  );
};

export default Cadastro;
