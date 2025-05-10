import { Container, TextField, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Salvar no localStorage apenas como simulação
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Conta criada! Faça login.');
    navigate('/');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Criar Conta</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Senha" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" fullWidth onClick={handleRegister}>Registrar</Button>
    </Container>
  );
}
