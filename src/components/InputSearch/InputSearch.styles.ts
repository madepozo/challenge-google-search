import styled from '@emotion/styled';

import { getColor } from 'styles/utils';

export const InputSearchWrapper = styled('div')`
	position: relative;
	width: 100%;

	.loader {
		right: 0px;
		top: 5px;
	}
`;

export const Input = styled('input')`
	background-color: ${getColor('white')};
	border: 1px solid ${getColor('blue')};
	border-radius: 12px;
	color: blue;
	font-size: 16px;
	line-height: 20px;
	outline: none;
	padding: 8px 16px;
	vertical-align: middle;
	width: 100%;
`;
