import React, { Component } from 'react';
import Spinner from './Spinner';
import Login from './Login';
import Logout from './Logout';


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isLoading: false,
        };

    }

    onLogin = () => {
        this.setState({
            isLoading: true,
        })

        setTimeout(() => {
            this.setState({
                isLoading: false,
                isLoggedIn: true,
            })
            
            
        }, 2000);
    }

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
            isLoading: false,
        });
    };


    render() {
        const { isLoggedIn, isLoading } = this.state;
        if (isLoading) {
            return <Spinner size={35} />
        }

        if (isLoggedIn) {
            return <Logout onLogout={this.onLogout} />;
        }

        return <Login onLogin={this.onLogin} />;
    }

}

export default Auth;