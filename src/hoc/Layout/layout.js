import React from 'react';
import './Layout.css';
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle';
import Aside from '../../Components/Navigation/Aside/Aside';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    };

    onToggle() {
        let open = this.state.isOpen;
        this.setState({
            isOpen: !open,
        })
    }

    render() {
        return (
            <main className="main">
                <div className="container">
                    <Aside isOpen={this.state.isOpen}/>
                    <div className="main__inner">
                        <MenuToggle onToggle={this.onToggle.bind(this)} isOpen={this.state.isOpen}/>

                        {this.props.children}
                    </div>
                </div>
            </main>
        )
    };
};

export default Layout;