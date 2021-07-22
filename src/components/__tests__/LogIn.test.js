import { mount } from "enzyme";

import LogIn from "../LogIn";

var wrapped;
beforeEach(() => {
  wrapped = mount(<LogIn />);
});

afterEach(() => {
  wrapped.unmount();
});
it("Have an email and password input field", () => {
  expect(wrapped.find("#email").length).toEqual(1);
  expect(wrapped.find("#password").length).toEqual(1);
});
it("clears the content of email and password input field on submit event", () => {
  wrapped.find("#email").simulate("change", { target: { value: "emailis" } });
  wrapped
    .find("#password")
    .simulate("change", { target: { value: "passwordis" } });
  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("#email").prop("value")).toEqual("");
  expect(wrapped.find("#password").prop("value")).toEqual("");
});
