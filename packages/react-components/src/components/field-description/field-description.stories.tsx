import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldDescription } from "../field-description/field-description";

export default {
	component: FieldDescription,
} satisfies Meta<typeof FieldDescription>;

type Story = StoryObj<typeof FieldDescription>;

export const Default = {
	args: {
		children: "Description",
	},
} satisfies Story;
