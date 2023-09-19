type OnClick = () => void;

type ButtonProps = {
	className: string;
	children: string;
	type: string;
	onClick: OnClick;
	disabled: boolean;
	dataTestId: string;
}

export const Button = (props : ButtonProps) => {
	const {
		className,
		children,
		onClick,
		disabled,
		dataTestId,
	} = props;
	
	if (disabled) {
		return (
			<button
				disabled
				className={className}
				data-testid={dataTestId}
			>
				{children}
			</button>
		);
	} else {
		return (
			<button
				onClick={onClick}
				className={className}
				data-testid={dataTestId}
			>
				{children}
			</button>
		);
	}
};
