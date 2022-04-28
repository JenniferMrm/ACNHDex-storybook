import Typography from "@ui/globals/typography";

export default {
  title: "Globals/typography",
  component: "Typography",
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Typography },
  template: "<typography />",
});

export const Story = Template.bind({});
Story.storyName = "default";
