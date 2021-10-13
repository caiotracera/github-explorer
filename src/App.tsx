import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
