const apiBase =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://tobedone';

export default apiBase;
