import React from 'react';
import './Layout.css';

class Layout extends React.Component {
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        )
    };
};

export default Layout;