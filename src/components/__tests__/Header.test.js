import React from "react";
import { mount } from "enzyme";

import Header from "../Header";
import Search from "../Search";
import { BrowserRouter as Router } from "react-router-dom";
var wrapped;
beforeEach(() => {
  wrapped = mount(
    <Router>
      <Header />
    </Router>
  );
});
afterEach(() => {
  wrapped.unmount();
});
it("Contains search bar, Login and sign Up", () => {
  expect(wrapped.find(Search).length).toEqual(1);
});
