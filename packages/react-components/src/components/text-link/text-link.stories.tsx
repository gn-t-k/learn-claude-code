import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLink } from "./text-link";

export default {
	component: TextLink,
	argTypes: {
		href: { control: "text" },
		children: { control: "text" },
		isDisabled: { control: "boolean" },
		target: { control: "text" },
		rel: { control: "text" },
		asChild: { table: { disable: true } },
	},
} satisfies Meta<typeof TextLink>;

type Story = StoryObj<typeof TextLink>;

export const Default = {
	args: {
		href: "#",
		children: "Default Link",
	},
} satisfies Story;

export const External = {
	args: {
		href: "https://example.com",
		children: "External Link",
		target: "_blank",
		rel: "noopener noreferrer",
	},
} satisfies Story;

export const Disabled = {
	args: {
		href: "#",
		isDisabled: true,
		children: "Disabled Link",
	},
} satisfies Story;
