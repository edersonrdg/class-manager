import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Classes from '../pages/Classes';
import Students from '../pages/Students';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Classes} />
            <Route path="/students" component={Students} />
        </Switch>
    );
};

export default Routes;
