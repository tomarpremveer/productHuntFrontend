import React from "react";
import App from "../App";
import { shallow } from "enzyme";
var wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("renders successfully", function () {
  expect(2 + 2).toEqual(4);
});
