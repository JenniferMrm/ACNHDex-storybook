import ColorChart from "@ui/globals/colors";

export default {
  title: "Globals/colors",
  component: ColorChart,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ColorChart },
  template: "<color-chart />",
});

export const Story = Template.bind({});
Story.storyName = "default";
