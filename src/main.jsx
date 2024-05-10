import { createRoot } from 'react-dom/client';
import './i18n';
import App from './App';
import "./main.css"

// append app to domconst { t, i18n } = useTranslation();
const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <App/>

  </>
);