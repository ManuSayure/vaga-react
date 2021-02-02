import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';

import List from './List';
import Cart from './Cart';
import {isAuthenticated} from '../../services/auth';
import Home from './Home';

import Login from './Auth/login';
import Register from './Auth/register';
import User from './User';

import Cart from './Cart';
import ConfirmPayment from './ConfirmPayment';
import ErrorPayment from './ErrorPayment';



const PrivateRouter = ({component: Component}, ...rest)=>(
    <Route
    {...rest}
    render = { props => isAuthenticated
        ? ( <Component { ...props}/> )
        : ( <Redirect to={{ pathname: "/", state: { from: props.location } }} /> )
    }
    />
)

const Pages =  () => (
    <Switch>
        <Router exact path = 'home'                component = {Home} />
        <Route        path = '/home/:itemId'       component = {} />

        <Route   exact path = '/register'           component = {Register} />
        <Route   exact path = '/login'              component = {Login} />
        <PrivateRouter path = 'user/:id/perfil'     component = {User} />

        <Route         path = 'user/cart'                  component = {} />
        <Route         path = 'user/cart/checkout/confirm' component = {} />

        <PrivateRouter path ='user/cart/checkout'          component = {} />
        <PrivateRouter path = 'user/cart/checkout/payment' component = {} />        

        <Route path = '*' component = {} />

    </Switch>

)