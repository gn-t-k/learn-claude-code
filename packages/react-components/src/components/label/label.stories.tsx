import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "../textfield/textfield";
import { Label } from "./label";

export default {
	component: Label,
	argTypes: {
		className: { control: "text" },
		children: { control: "text" },
	},
} satisfies Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default = {
	args: {
		children: "Label Text",
	},
} satisfies Story;

export const Disabled = {
	render: (args) => (
		<TextField isDisabled>
			<Label {...args}>Disabled Label</Label>
		</TextField>
	),
} satisfies Story;

export const Invalid = {
	render: (args) => (
		<TextField isInvalid>
			<Label {...args}>Invalid Label</Label>
		</TextField>
	),
} satisfies Story;
