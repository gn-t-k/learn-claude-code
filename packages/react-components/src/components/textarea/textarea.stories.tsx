import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./textarea";

export default {
	component: Textarea,
	argTypes: {
		disabled: { control: "boolean" },
		autoFocus: { control: "boolean" },
		placeholder: { control: "text" },
		defaultValue: { control: "text" },
	},
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default = {} satisfies Story;

export const WithPlaceholder = {
	args: {
		placeholder: "Enter your message...",
	},
} satisfies Story;

export const WithDefaultValue = {
	args: {
		defaultValue: "This is a default value.\nFeel free to edit it.",
	},
} satisfies Story;

export const Disabled = {
	args: {
		disabled: true,
		defaultValue: "Disabled textarea",
	},
} satisfies Story;

export const AutoFocus = {
	args: {
		autoFocus: true,
		placeholder: "Auto-focused textarea",
	},
} satisfies Story;
