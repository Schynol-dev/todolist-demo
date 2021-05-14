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
				<App />
			</ThemeProvider>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
