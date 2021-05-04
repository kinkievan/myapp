
import './App.css';
import Sign from './SignUp'
import LineSuccess from './LineSuccess'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Sign}>
        </Route>
        <Route exact path="/linesuccess" component={LineSuccess}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
