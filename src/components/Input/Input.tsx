import { Dispatch, SetStateAction } from "react";
// type InputSetter<T> = (arg: T) => void;

type InputProps = {
	className: string;
	labelClassName: string;
	type: string;
	label: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	placeholder: string;
	required: boolean;
	id: string;
	name: string;
	autoComplete: string;
}

export const Input = (props: InputProps) => {
	const {
		className,
		type = "text",
		label,
		labelClassName,
		value,
		setValue,
		placeholder,
		required = false,
		id,
		name,
		autoComplete,
	} = props;
	return (
		<>
			{label && <label className={labelClassName}>{label}</label>}
			<input
				className={className}
				type={type}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				required={required}
				id={id}
				name={name}
				autoComplete={autoComplete}
			/>
		</>
	);
};
