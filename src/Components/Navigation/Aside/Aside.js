import React from 'react';
import './Aside.css';

class Aside extends React.Component {

    render() {
        return (
           <aside className={['aside', this.props.isOpen ? 'aside_active' : ''].join(' ')}>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Services
                            </a>
                        </li>
                    </ul>
                </nav>
           </aside>
        )   
    }
}

export default Aside;