import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Quote from './Quote';
import Packages from './Packages';
import Gallery from './Gallery';

const Router = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/quote' component={Quote} />
            <Route path='/packages' component={Packages} />
            <Route path='/gallery' component={Gallery} />
        </Switch>
    </div>
)

export default Router;