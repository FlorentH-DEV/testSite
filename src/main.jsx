import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './css/index.css'
import LayoutSelector from './component/lib/layoutSelector/LayoutSelector';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LayoutSelector/>
    </BrowserRouter>
  </StrictMode>
)
