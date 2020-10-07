import styled from '@emotion/styled';

import { getColor } from 'styles/utils';

export const CustomSelectWrapper = styled('div')`
	background: ${getColor('white')};
	border-radius: 12px;
	border: 1px solid ${getColor('blue')};
	position: relative;
`;

export const CustomSelectText = styled('div')`
	align-items: center;
	display: flex;
	flex-direction: row;
	height: 100%;
	justify-content: space-between;
	padding: 8px 16px;
`;

export const CustomSelectValue = styled('span')`
	color: ${getColor('blue')};
	font-size: 16px;
`;

export const CustomSelectArrowIcon = styled('i')`
	border-left: 5px solid transparent;
	border-right: 5px solid transparent;
	border-top: 5px solid ${getColor('blue')};
	height: 0;
	margin-top: 2px;
	width: 0;
`;

export const CustomSelectList = styled('ul')`
	background: ${getColor('white')};
	box-shadow: 0 2px 12px 0 rgba(230, 230, 230, 0.5);
	position: absolute;
	top: calc(100% + 6px);
	width: 100%;
	z-index: 10;
`;

export const CustomSelectListItem = styled('li')`
	background: ${getColor('white')};
	color: #909090;
	cursor: pointer;
	font-size: 14px;
	list-style-type: none;
	margin-top: 2px;
	padding: 13px;
	text-align: center;
	transition: all 0.25s linear;

	&:hover {
		background: #f6f6f6;
	}
`;
