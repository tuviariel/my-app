type OnClick = () => void;

type ButtonProps = {
	className: string;
	children: string;
	type: string;
	onClick: OnClick;
	disabled: boolean;
}

export const Button = (props : ButtonProps) => {
	const {
		className,
		children,
		onClick,
		disabled,
	} = props;
	
	if (disabled) {
		return (
			<button
				disabled
				className={className}
			>
				{children}
			</button>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={className}
			>
				{children}
			</button>
		);
	}
};
