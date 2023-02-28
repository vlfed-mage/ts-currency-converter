import { Component, ErrorInfo, ReactNode } from 'react';

import './error-boundary.scss';

import ErrorIndicator from '../error-indicator';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends Component<Props, State> {
    state: State = {
        hasError: false,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            hasError: true,
            errorInfo: errorInfo,
        });
    }

    render() {
        const { hasError, errorInfo } = this.state;

        if (hasError) {
            console.warn(`ErrorBoundary caught an error: ${errorInfo?.componentStack}`);
            return <ErrorIndicator />;
        }

        return this.props.children;
    }
}
