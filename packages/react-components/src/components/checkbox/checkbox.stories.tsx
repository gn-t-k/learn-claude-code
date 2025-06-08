import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "@storybook/test";
import { Checkbox } from "./checkbox";

export default {
	component: Checkbox,
	argTypes: {
		isSelected: {
			control: "boolean",
		},
		isDisabled: {
			control: "boolean",
		},
		isIndeterminate: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default = {
	render: () => <Checkbox>Accept terms and conditions</Checkbox>,
} satisfies Story;

export const Check = {
	render: () => <Checkbox>Accept terms and conditions</Checkbox>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");

		await userEvent.click(checkbox);
	},
} satisfies Story;

export const CheckThenUncheck = {
	render: () => <Checkbox>Accept terms and conditions</Checkbox>,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole("checkbox");

		await userEvent.click(checkbox);
		await userEvent.click(checkbox);
	},
} satisfies Story;

export const Disabled = {
	render: () => <Checkbox isDisabled>Disabled checkbox</Checkbox>,
} satisfies Story;

export const DisabledChecked = {
	render: () => (
		<Checkbox isSelected isDisabled>
			Disabled and checked
		</Checkbox>
	),
} satisfies Story;

export const Indeterminate = {
	render: () => <Checkbox isIndeterminate>Indeterminate state</Checkbox>,
} satisfies Story;

export const WithoutLabel = {
	render: () => <Checkbox />,
} satisfies Story;
