import PatternGlobals from "@ui/globals/pattern";

export default {
  title: "Globals/pattern",
  component: PatternGlobals,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { PatternGlobals },
  template: "<pattern-globals />",
});

export const Story = Template.bind({});
Story.storyName = "default";
