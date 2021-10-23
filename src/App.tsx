import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './pages/Home';
import { User } from './pages/User';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/users/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
}
