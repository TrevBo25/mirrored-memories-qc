import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import About from './About';
import Contact from './Contact';
import Quote from './Quote';
import Packages from './Packages';
import GalleryComponent from './GalleryComponent';

const Router = ({update}) => (
    <div>
        <Switch>
            <Route exact path='/' render={() => <Landing update={update} /> }/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/quote' component={Quote} />
            <Route path='/packages' component={Packages} />
            <Route path='/gallery' component={GalleryComponent} />
        </Switch>
    </div>
)

export default Router;