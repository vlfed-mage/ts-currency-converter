import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';

const root = createRoot(document.getElementById('root')!);
root.render(
    <ErrorBoundary>
        <HelmetProvider>
            <Router>
                <App />
            </Router>
        </HelmetProvider>
    </ErrorBoundary>
);
