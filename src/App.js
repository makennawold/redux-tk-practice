import "./styles/app.css";
import Counter from "./features/counter/Counter";
import StitchCounter from "./features/stitchcounter/StitchCounter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app" style={{ display: "flex", flexDirection: "column" }}>
      <Router>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/stitchcounter">StitchCounter</Link>
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/stitchcounter">
              <StitchCounter />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
