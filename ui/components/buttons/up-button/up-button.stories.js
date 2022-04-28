import UpButton from "@ui/components/buttons/up-button";

export default {
  title: "Components/buttons/up-button",
  component: UpButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { UpButton },
  template: "<up-button />",
});

export const Story = Template.bind({});
Story.storyName = "default";
