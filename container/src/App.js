import React , {lazy , Suspense} from 'react';

import Header from "./components/Header";
import Progress from "./components/Progress";
import {BrowserRouter , Route , Switch} from "react-router-dom";
import { StylesProvider , createGenerateClassName} from '@material-ui/core/styles';

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'));


const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });


export default()=>{
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header/>
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth" component={AuthAppLazy}/>
                            <Route path="/dashboard" component={DashboardAppLazy}/>
                            <Route path="/" component={MarketingAppLazy}/>
                            
                        </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter>
    );
}