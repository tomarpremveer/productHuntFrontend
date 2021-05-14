import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Search from "./Search";
function Router() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/d" component={Search} />
      </div>
    </BrowserRouter>
  );
}
export default Router;
