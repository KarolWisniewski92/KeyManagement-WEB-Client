import React from 'react';
import { Fragment } from 'react';
import { Box } from './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        console.log(`ups mamy błąd`);
        // Zaktualizuj stan, aby następny render pokazał zastępcze UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {

    }

    render() {
        if (this.state.hasError) {
            // Możesz wyrenderować dowolny interfejs zastępczy.
            return <Fragment>
                <Box>
                    <h1>Ups coś poszło nie tak.</h1>
                    <p>Odśwież stronę aby spróbować ponownie!</p>
                    <button onClick={() => {
                        window.location.reload()
                    }}>Odśwież!</button>
                </Box>
            </Fragment>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;