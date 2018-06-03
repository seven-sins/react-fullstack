import React from 'react';
import './logo.less';
import logoImg from '../../images/01.jpg';

class Logo extends React.Component{
    
    render(){
        return (
            <div className="logo-container">
                <img src={logoImg} />
            </div>
        )
    }
}

export default Logo;