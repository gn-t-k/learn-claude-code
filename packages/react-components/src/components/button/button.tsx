import { type VariantProps, cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import type { ComponentProps, FC } from "react";
import {
	Button as AriaButton,
	type ButtonProps as AriaButtonProps,
	composeRenderProps,
} from "react-aria-components";
import { cn } from "../../utilities/cn";

export type ButtonProps = VariantProps<typeof buttonVariants> &
	(
		| ({ asChild: true } & ComponentProps<typeof Slot.Root>)
		| ({ asChild?: false } & AriaButtonProps)
	);

export const Button: FC<ButtonProps> = (props) => {
	if (props.asChild === true) {
		const { variant, size, className, asChild: _, ...rest } = props;
		return (
			<Slot.Root
				className={cn(buttonVariants({ variant, size }), className)}
				{...rest}
			/>
		);
	}

	const { variant, size, className, asChild: _, ...rest } = props;
	return (
		<AriaButton
			className={composeRenderProps(className, (className) =>
				cn(buttonVariants({ variant, size, className })),
			)}
			{...rest}
		/>
	);
};

export const buttonVariants = cva(
	[
		"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
		/* Disabled */
		"data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ",
		/* Focus Visible */
		"data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
		/* Resets */
		"focus-visible:outline-none",
	],
	{
		variants: {
			variant: {
				primary:
					"bg-primary text-primary-foreground data-[hovered]:bg-primary/90 hover::bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground data-[hovered]:bg-destructive/70 hover::bg-destructive/70",
				outline:
					"border border-input bg-background data-[hovered]:bg-accent hover:bg-accent data-[hovered]:text-accent-foreground hover:text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground data-[hovered]:bg-secondary/60 hover:bg-secondary/60",
				ghost:
					"data-[hovered]:bg-accent hover:bg-accent data-[hovered]:text-accent-foreground hover:text-accent-foreground",
			},
			size: {
				sm: "h-9 rounded-md px-3",
				md: "h-10 px-4 py-2",
				lg: "h-11 rounded-md px-8",
				icon: "size-10",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	},
);
