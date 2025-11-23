import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Login from './components/login';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <Login />
    </StrictMode>,
  );
}
