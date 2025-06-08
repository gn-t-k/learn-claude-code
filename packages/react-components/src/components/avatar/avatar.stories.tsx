import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export default {
	component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default = {
	render: () => (
		<Avatar className="size-16">
			<AvatarImage
				className="object-cover"
				src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
				alt="User Avatar"
			/>
			<AvatarFallback>AB</AvatarFallback>
		</Avatar>
	),
} satisfies Story;

export const WithFallback = {
	render: () => (
		<Avatar className="size-16">
			<AvatarImage src="https://invalid-url" alt="User Avatar" />
			<AvatarFallback>CD</AvatarFallback>
		</Avatar>
	),
} satisfies Story;
