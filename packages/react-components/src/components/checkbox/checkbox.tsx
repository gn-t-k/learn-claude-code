import { Check, Minus } from "lucide-react";
import type { FC } from "react";
import {
	Checkbox as AriaCheckbox,
	type CheckboxProps as AriaCheckboxProps,
	composeRenderProps,
} from "react-aria-components";
import { cn } from "../../utilities/cn";

export type CheckboxProps = AriaCheckboxProps;

export const Checkbox: FC<CheckboxProps> = ({
	className,
	children,
	...props
}) => {
	return (
		<AriaCheckbox
			className={composeRenderProps(className, (className) =>
				cn(
					"group/checkbox flex items-center gap-2 font-medium text-sm leading-none",
					// disabled
					"data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
					// focus-visible
					"data-[focus-visible]:rounded data-[focus-visible]:outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2",
					className,
				),
			)}
			{...props}
		>
			{composeRenderProps(
				children,
				(children, { isSelected, isIndeterminate }) => (
					<>
						<div
							className={cn(
								"flex size-4 shrink-0 items-center justify-center rounded border border-primary ring-offset-background",
								isSelected || isIndeterminate
									? "bg-primary text-primary-foreground"
									: "bg-background",
							)}
						>
							{isIndeterminate ? (
								<Minus className="size-3" />
							) : isSelected ? (
								<Check className="size-3" />
							) : null}
						</div>
						{children}
					</>
				),
			)}
		</AriaCheckbox>
	);
};
