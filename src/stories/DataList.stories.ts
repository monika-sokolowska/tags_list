import { Meta, StoryObj } from "@storybook/react";
import DataList from "./DataList";
import { boolean } from "yargs";

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

export const Regular: Story = {
  args: {
    isHeader: true,
  },
};
