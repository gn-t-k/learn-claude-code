import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";

export default {
	component: Input,
	argTypes: {
		disabled: { control: "boolean" },
		autoFocus: { control: "boolean" },
		placeholder: { control: "text" },
	},
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default = {} satisfies Story;

export const WithPlaceholder = {
	args: {
		placeholder: "Enter text here",
	},
} satisfies Story;

export const WithDefaultValue = {
	args: {
		defaultValue: "Default value",
	},
} satisfies Story;

export const Disabled = {
	args: {
		disabled: true,
		defaultValue: "Default value",
	},
} satisfies Story;

export const AutoFocus = {
	args: {
		autoFocus: true,
		placeholder: "Auto focused input",
	},
} satisfies Story;
