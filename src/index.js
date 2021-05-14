import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<ThemeProvider theme={theme}>
			<React.Suspense fallback={<h1>Loading Items...</h1>}><App /></React.Suspense>
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
