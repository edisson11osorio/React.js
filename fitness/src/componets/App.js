import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Exercises from '../Pages/Exercises';
import ExerciseNew from '../Pages/ExerciseNew';
import NotFound from '../Pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises} />
                <Route exact path="/exercise/new" component={ExerciseNew} />
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}
export default App