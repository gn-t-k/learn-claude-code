import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from "../textfield/textfield";
import { FieldErrorMessages } from "./field-error-messages";

export default {
	component: FieldErrorMessages,
} satisfies Meta<typeof FieldErrorMessages>;

type Story = StoryObj<typeof FieldErrorMessages>;

const isInvalid = (errors: string[]) => errors.length > 0;

export const Default = {
	render: () => {
		const errors = ["This field is required."];
		return (
			<TextField isInvalid={isInvalid(errors)}>
				<FieldErrorMessages errors={errors} />
			</TextField>
		);
	},
} satisfies Story;

export const MultipleErrors = {
	render: () => {
		const errors = [
			"This field is required.",
			"Must be at least 8 characters.",
			"Must contain a number.",
		];
		return (
			<TextField isInvalid={isInvalid(errors)}>
				<FieldErrorMessages errors={errors} />
			</TextField>
		);
	},
} satisfies Story;

export const NoErrors = {
	render: () => {
		const errors = [] satisfies string[];
		return (
			<TextField isInvalid={isInvalid(errors)}>
				<FieldErrorMessages errors={errors} />
			</TextField>
		);
	},
} satisfies Story;
