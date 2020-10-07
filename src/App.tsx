import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';

import { theme } from 'styles/theme';
import SearchEngine from 'containers/SearchEngine';
import GlobalStyles from 'styles/GlobalStyles';
import store from './store';

export default (): ReactElement => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<SearchEngine />
		</ThemeProvider>
	</Provider>
);
