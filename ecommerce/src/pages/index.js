import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';

import List from './List';
import Cart from './Cart';
import {isAuthenticated} from '../../services/auth';

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
        <Router exact path = 'home'                component = {} />
        <Route        path = '/home/:itemId'       component = {} />

        <Route   exact path = '/register'           component = {} />
        <Route   exact path = '/login'              component = {} />
        <PrivateRouter path = 'user/:id/perfil'     component = {} />

        <Route         path = 'user/cart'                  component = {} />
        <Route         path = 'user/cart/checkout/confirm' component = {} />

        <PrivateRouter path ='user/cart/checkout'          component = {} />
        <PrivateRouter path = 'user/cart/checkout/payment' component = {} />        

        <Route path = '*' component = {} />

    </Switch>

)