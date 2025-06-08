import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "@storybook/test";
import { Button } from "../button/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogTitle,
	DialogTrigger,
} from "./dialog";

export default {
	component: Dialog,
} satisfies Meta<typeof Dialog>;

type Story = StoryObj<typeof Dialog>;

export const Default = {
	render: () => (
		<DialogTrigger>
			<Button variant="outline">Open Dialog</Button>
			<DialogOverlay>
				<DialogContent>
					{({ close }) => (
						<div className="grid gap-4">
							<DialogHeader>
								<DialogTitle>Dialog Title</DialogTitle>
								<DialogDescription>
									This is a description of the dialog.
								</DialogDescription>
							</DialogHeader>
							<DialogFooter>
								<Button variant="outline" onClick={close}>
									Cancel
								</Button>
								<Button variant="primary" onClick={close}>
									Confirm
								</Button>
							</DialogFooter>
						</div>
					)}
				</DialogContent>
			</DialogOverlay>
		</DialogTrigger>
	),
} satisfies Story;

export const OpenDialog = {
	render: Default.render,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole("button", { name: "Open Dialog" });

		await userEvent.click(trigger);
	},
} satisfies Story;

export const OpenThenCloseDialog = {
	render: Default.render,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole("button", { name: "Open Dialog" });

		await userEvent.click(trigger);

		// Dialogはbodyに描画されるため、canvasElementではなくdocument.bodyを使用
		const screen = within(document.body);
		const cancelButton = screen.getByRole("button", { name: "Cancel" });

		await userEvent.click(cancelButton);
	},
} satisfies Story;
