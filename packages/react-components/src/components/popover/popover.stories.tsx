import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "@storybook/test";
import { Button } from "../button/button";
import { Popover, PopoverDialog, PopoverTrigger } from "./popover";

export default {
	component: PopoverTrigger,
} satisfies Meta<typeof PopoverTrigger>;

type Story = StoryObj<typeof PopoverTrigger>;

export const Default = {
	render: () => (
		<PopoverTrigger>
			<Button variant="primary">Open Popover</Button>
			<Popover>
				<PopoverDialog>
					<div style={{ padding: 8 }}>Default popover content</div>
				</PopoverDialog>
			</Popover>
		</PopoverTrigger>
	),
} satisfies Story;

export const OpenPopover = {
	render: Default.render,
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole("button", { name: "Open Popover" });

		await userEvent.click(trigger);
	},
} satisfies Story;

export const WithOffset = {
	render: () => (
		<PopoverTrigger>
			<Button variant="primary">Offset 16</Button>
			<Popover offset={16}>
				<PopoverDialog>
					<div style={{ padding: 8 }}>Popover with offset 16</div>
				</PopoverDialog>
			</Popover>
		</PopoverTrigger>
	),
} satisfies Story;

export const Placements = {
	render: () => (
		<div className="grid gap-6">
			{(["bottom", "left", "right", "top"] as const).map((placement) => (
				<div key={placement} className="grid justify-center">
					<PopoverTrigger>
						<Button variant="secondary">{placement}</Button>
						<Popover placement={placement}>
							<PopoverDialog>
								<div style={{ padding: 8 }}>{`Placement: ${placement}`}</div>
							</PopoverDialog>
						</Popover>
					</PopoverTrigger>
				</div>
			))}
		</div>
	),
} satisfies Story;
