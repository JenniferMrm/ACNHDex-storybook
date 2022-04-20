import Player from "@ui/segments/player";

export default {
  title: "Segments/player",
  component: Player,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Player },
  template: "<player v-bind='$props'></player>",
});

export const Story = Template.bind({});
Story.storyName = "default";
