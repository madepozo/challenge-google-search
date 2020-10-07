import React, { memo, ReactElement, useLayoutEffect, useRef } from 'react';

import { InputSearchWrapper, Input } from './InputSearch.styles';

type Props = {
	value: string;
	placeholder?: string;
	changeHandler: (value: string) => void;
};

const InputSearch = ({
	changeHandler,
	placeholder = 'Search',
	value,
}: Props): ReactElement => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
		changeHandler(evt.target.value);
	};

	useLayoutEffect(() => {
		if (inputRef.current !== null) {
			inputRef.current.focus();
		}
	}, []);

	return (
		<InputSearchWrapper>
			<Input
				ref={inputRef}
				value={value}
				type="search"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</InputSearchWrapper>
	);
};

export default memo(InputSearch);
