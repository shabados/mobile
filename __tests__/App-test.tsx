import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { View } from "react-native";
import App from "../src/App";

const createTestProps = (props: object) => ({
  ...props
});

describe("App", () => {
  describe("rendering", () => {
    let wrapper: ShallowWrapper;
    let props: object;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<App {...props} />);
    });

    it("should render a <View />", () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});
