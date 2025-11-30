import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Register from './components/register';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <StrictMode>
      <Register />
    </StrictMode>,
  );
}
