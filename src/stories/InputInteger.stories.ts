import { Meta, StoryObj } from "@storybook/react";
import InputInteger from "./InputInteger";

const meta = {
  title: "Example/InputNumber",
  component: InputInteger,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showButtons: { control: true },
  },
} satisfies Meta<typeof InputInteger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithButtons: Story = {
  args: {
    showButtons: true,
  },
};

export const WithoutButtons: Story = {
  args: {
    showButtons: false,
  },
};
