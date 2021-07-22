import { mount } from "enzyme";
import LogIn from "../LogIn";
import LogSign from "../LogSign";
import SignUp from "../SignUp";

var wrapped;
beforeEach(() => {
  wrapped = mount(<LogSign />);
});

it("Contains a LogIn component and Sign Up component", () => {
  expect(wrapped.find(LogIn).length).toEqual(1);
  expect(wrapped.find(SignUp).length).toEqual(1);
});
