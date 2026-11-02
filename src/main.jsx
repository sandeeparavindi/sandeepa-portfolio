import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioApp from './components/PortfolioApp.jsx';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) { console.error('Portfolio rendering error:', error, info); }
  render() {
    if (!this.state.error) return this.props.children;
    return <div className="min-h-screen bg-night p-10 text-night-foreground">
      <h1 className="font-display text-2xl font-bold">Unable to load the portfolio.</h1>
      <p className="mt-2">Please refresh this page. If the issue persists, open the developer console to inspect the error.</p>
      <pre className="mt-4 whitespace-pre-wrap text-brand">{String(this.state.error)}</pre>
    </div>;
  }
}

createRoot(document.getElementById('root')).render(<StrictMode><ErrorBoundary><PortfolioApp /></ErrorBoundary></StrictMode>);
