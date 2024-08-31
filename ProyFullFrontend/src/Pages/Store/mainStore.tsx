import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { men, women, kids, store, outStore, home, auth, follows, car } from './mainPages';
function mainStore() {
    return (
        <main className='mainCont'>
            <Switch>
                <Route path="/home" component={home} />
                <Route path="/men" component={men} />
                <Route path="/women" component={women} />
                <Route path="/kids" component={kids} />
                <Route path="/collection" component={store} />
                <Route path="/trend" component={outStore} />
                <Route path="/auth" component={auth} />
                <Route path="/follows" component={follows} />
                <Route path="/carrito" component={car} />
            </Switch>
        </main>
    )
}

export default mainStore