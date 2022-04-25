import { shallowMount } from "@vue/test-utils";
import ButtonPrimary from "./index";

describe("ButtonPrimary", () => {
  const wrapper = shallowMount(ButtonPrimary, {
    propsData: {
      content: "test",
    },
  });

  it("Button primary - should correctly mounted", () => {
    expect(wrapper.classes()).toContain("button-primary");
  });
});
