import React from "react";
import { mount } from "enzyme";

import Search from "../Search";

var wrapped;

beforeEach(() => {
  wrapped = mount(<Search />);
});
afterEach(() => {
  wrapped.unmount();
});
it("Contains a Search input box", function () {
  expect(wrapped.find("#searchBox").length).toEqual(1);
  wrapped.find("#searchBox").simulate("change", {
    target: { value: "React" },
  });
  wrapped.update();
  expect(wrapped.find("#searchBox").prop("value")).toEqual("React");
});
