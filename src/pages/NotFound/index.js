import React from 'react';
import { NotPage } from './styles';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <NotPage>
      <h1>404</h1>
      <span>Not Found</span>
      <Link to="/">Voltar para Home</Link>
    </NotPage>
  );
}
