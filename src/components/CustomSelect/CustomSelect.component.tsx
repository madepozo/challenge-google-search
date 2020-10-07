import React, { memo, ReactElement, useEffect, useRef, useState } from 'react';

import {
	CustomSelectWrapper,
	CustomSelectText,
	CustomSelectValue,
	CustomSelectArrowIcon,
	CustomSelectList,
	CustomSelectListItem,
} from './CustomSelect';

type Props = {
	value: string;
	items: string[];
	changeHandler: (value: string) => void;
};

const CustomSelect = ({ items, changeHandler, value }: Props): ReactElement => {
	const wrapperRef = useRef<HTMLDListElement>(null);
	const [showList, setShowLit] = useState<boolean>(false);

	const handleClickOutside = (evt): void => {
		if (wrapperRef.current && !wrapperRef.current.contains(evt.target)) {
			setShowLit(false);
		}
	};

	const handleChange = (evt: React.MouseEvent): void => {
		const name = evt.currentTarget.getAttribute('data-name');

		if (name) {
			changeHandler(name);
			setShowLit(false);
		}
	};

	const handleShowList = (): void => {
		setShowLit((current) => !current);
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return (): void => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<CustomSelectWrapper ref={wrapperRef}>
			<CustomSelectText onClick={handleShowList}>
				<CustomSelectValue>{value}</CustomSelectValue>
				<CustomSelectArrowIcon />
			</CustomSelectText>
			{showList && (
				<CustomSelectList>
					{items.map((item: string) => (
						<CustomSelectListItem
							data-name={item}
							key={`CustomSelect-list-item-${item}`}
							onClick={handleChange}
						>
							{item}
						</CustomSelectListItem>
					))}
				</CustomSelectList>
			)}
		</CustomSelectWrapper>
	);
};

export default memo(CustomSelect);
