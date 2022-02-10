import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { App } from 'src/App';
import { getLanguage } from 'src/helpers/useLanguage';
import ptBR from 'src/locales/pt-BR.json';
import en from 'src/locales/en.json';
import es from 'src/locales/es.json';

const messages = { 'en': en, 'pt-BR': ptBR, 'es': es };
const language  = getLanguage();

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>,
  document.getElementById('root')
);
