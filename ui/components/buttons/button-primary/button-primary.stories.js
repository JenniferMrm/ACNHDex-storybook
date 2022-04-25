import ButtonPrimary from "@ui/components/buttons/button-primary";

export default {
  title: "Components/buttons/button-primary",
  component: ButtonPrimary,
  argTypes: {
    content: {
      control: "text",
      defaultValue: "Back to Home",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ButtonPrimary },
  template: "<button-primary v-bind='$props'></button-primary>",
});

export const Story = Template.bind({});
Story.storyName = "default";
