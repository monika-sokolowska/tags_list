import { Meta, StoryObj } from "@storybook/react";
import ToastNotification from "./ToastNotification";
import Severity from "./assets/helpers";

const meta = {
  title: "Example/ToastNotification",
  component: ToastNotification,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    severity: { control: Severity.INFO },
  },
} satisfies Meta<typeof ToastNotification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Error: Story = {
  args: {
    severity: Severity.ERROR,
  },
};

export const Info: Story = {
  args: {
    severity: Severity.INFO,
  },
};

export const Warn: Story = {
  args: {
    severity: Severity.WARN,
  },
};

export const Success: Story = {
  args: {
    severity: Severity.SUCCESS,
  },
};