/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import {
	googleCustomSearch,
	clearGoogleCustomSearch,
} from 'actions/googleActions';
import { getColor } from 'styles/utils';
import { InputSearch } from 'components/InputSearch';
import { CustomSelect } from 'components/CustomSelect';
import { ReduxState } from 'models/ReduxState';
import { GOOGLE, BING, BOTH } from 'Constansts';
import { GoogleResultItem } from 'models/GoogleResultItem';

const SearchEngine = (): ReactElement => {
	const dispatch = useDispatch();
	const [googleSearch] = useSelector((state: ReduxState) => [
		state.googleSearch,
	]);
	const [searchValuve, setSearchValue] = useState<string>('');
	const [engine, setEngine] = useState<string>(GOOGLE);

	const handleRedirect = (evt: React.MouseEvent): void => {
		const link = evt.currentTarget.getAttribute('data-link') || '';

		const win = window.open(link, '_blank');

		if (win) {
			win.focus();
		}
	};

	const handleSubmit = (): void => {
		dispatch(googleCustomSearch(searchValuve));
	};

	const handleClear = (): void => {
		dispatch(clearGoogleCustomSearch());
	};

	return (
		<SearchEngineWrapper>
			<SearchForm>
				<SearchLabel>Engine Search</SearchLabel>
				<CustomSelect
					value={engine}
					items={[GOOGLE, BING, BOTH]}
					changeHandler={setEngine}
				/>
				<SearchLabel>Search Query</SearchLabel>
				<InputSearch
					value={searchValuve}
					changeHandler={setSearchValue}
				/>
				<Button
					onClick={handleSubmit}
					disabled={!searchValuve || googleSearch.loading}
				>
					Submit
				</Button>
			</SearchForm>
			<SearchResult
				className={`${googleSearch.loading ? 'loading' : ''}`}
			>
				{googleSearch.loading && <Loading className="loader" />}
				<SearchResultTitle>
					{googleSearch.searchResults.length
						? `We found ${googleSearch.searchResults.length} results`
						: 'You will be able to see the result here'}
					{googleSearch.searchResults.length ? (
						<ClearButton onClick={handleClear}>Clear</ClearButton>
					) : null}
				</SearchResultTitle>
				<SearchResultItems>
					{googleSearch.searchResults &&
						googleSearch.searchResults.map(
							(item: GoogleResultItem) => (
								<SearchResultItem
									className="fade-in"
									data-link={item.link}
									key={`SearchEngine-result-item-${item.cacheId}`}
									onClick={handleRedirect}
								>
									<SearchResultItemTitle>
										{item.title}
									</SearchResultItemTitle>
									<SearchResultItemSnippet>
										{item.snippet}
									</SearchResultItemSnippet>
								</SearchResultItem>
							)
						)}
				</SearchResultItems>
			</SearchResult>
		</SearchEngineWrapper>
	);
};

const Loading = styled('span')`
	left: 55%;
	position: absolute;
	top: 50%;
`;

const SearchEngineWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 0 8px;
	width: 100%;

	@media (min-width: 768px) {
		flex-direction: row;
		padding: 0 20px;
	}
`;

const SearchForm = styled('div')`
	display: flex;
	flex-direction: column;
	padding: 10px 30px 0 0;
	margin-top: 30px;
	width: 400px;
`;

const SearchResult = styled('section')`
	border-left: 1.5px solid ${getColor('blue')};
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100vh;
	padding: 25px 0 0 10px;

	&.loading {
		opacity: 0.45;
	}

	@media (min-width: 768px) {
		padding: 40px 0 0 20px;
	}
`;

const SearchResultTitle = styled('h2')`
	align-items: center;
	color: ${getColor('blue')};
	display: flex;
	font-size: 18px;
	font-weight: normal;
	margin-bottom: 20px;
	position: relative;

	@media (min-width: 768px) {
		font-size: 24px;
	}
`;

const ClearButton = styled('span')`
	background: ${getColor('blue')};
	border-radius: 8px;
	color: ${getColor('white')};
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 6px 12px;
	position: absolute;
	right: 20px;
	top: 0;
`;

const SearchResultItems = styled('div')`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 10px 0;
	overflow-y: auto;
`;

const SearchResultItem = styled('article')`
	cursor: pointer;
	margin-bottom: 24px;
	padding-left: 6px;
`;

const SearchResultItemTitle = styled('h3')`
	color: ${getColor('blue')};
	font-size: 16px;
	font-weight: normal;
	margin-bottom: 8px;
`;

const SearchResultItemSnippet = styled('p')`
	color: ${getColor('black')};
	font-size: 14px;
`;

const SearchLabel = styled('label')`
	font-weight: 600;
	margin: 12px 6px;
`;

const Button = styled('button')`
	align-self: center;
	background: ${getColor('white')};
	border-radius: 12px;
	border: 1px solid ${getColor('blue')};
	color: ${getColor('blue')};
	margin-top: 30px;
	padding: 8px 0;
	transition: all 0.25s linear;
	width: 200px;

	&:disabled {
		pointer-events: none;
		opacity: 0.65;
	}

	&:hover {
		background: ${getColor('blue')};
		color: ${getColor('white')};
	}
`;

export default SearchEngine;
