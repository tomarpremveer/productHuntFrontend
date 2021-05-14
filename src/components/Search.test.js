import React from "react";
import { mount } from "enzyme";

import Search from "./Search";

var wrapped;

beforeEach(() => {
  wrapped = mount(<Search />);
});

it("Contains a Search input box", function () {
  expect(wrapped.find("#searchBox").length).toEqual(1);
  wrapped.find("#searchBox").simulate("change", {
    target: { value: "Jaat" },
  });
  wrapped.update();
});
