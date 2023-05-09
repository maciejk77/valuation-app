import { ThemeProvider } from 'styled-components';
import { Body, NavBar, Sidebar, Page, Content } from './style';

import { theme } from '../theme';
import '../styles/reset.css';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <Page>
          <Sidebar />
          <Content>
            <Component {...pageProps} />
          </Content>
          <NavBar />
        </Page>
      </Body>
    </ThemeProvider>
  );
}

export default App;
