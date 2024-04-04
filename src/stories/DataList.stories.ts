import { Meta, StoryObj } from "@storybook/react";
import DataList from "./DataList";

const meta = {
  title: "Example/DataList",
  component: DataList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isHeader: { control: true },
  },
} satisfies Meta<typeof DataList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeader: Story = {
  args: {
    isHeader: true,
  },
};

export const WithoutHeader: Story = {
  args: {
    isHeader: false,
  },
};
