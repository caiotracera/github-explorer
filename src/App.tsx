import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { UserDetails } from './pages/UserDetails';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users/:username" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
}
