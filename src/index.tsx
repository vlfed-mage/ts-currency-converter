import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './components/app';

const root = createRoot(document.getElementById('root')!);
root.render(
    <HelmetProvider>
        <Router>
            <App />
        </Router>
    </HelmetProvider>
);
