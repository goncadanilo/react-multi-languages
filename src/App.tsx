import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { getLanguage, setLanguage, Language } from 'src/helpers/useLanguage';
import 'src/App.scss';

export function App() {
  const { formatMessage } = useIntl();
  const language = getLanguage();

  const [currentLanguage, setCurrentLanguage] = useState<Language>(language);

  useEffect(() => {
    setLanguage(currentLanguage);
  }, [currentLanguage]);

  function handleChangeLanguage(lang: string) {
    setCurrentLanguage(lang as Language);
    window.location.reload();
  }

  return (
    <div className="App">
      <h1>{formatMessage({ id: 'app.title' })}</h1>
      <p>{formatMessage({ id: 'app.description' })}</p>

      <select
        value={currentLanguage}
        onChange={(event) => handleChangeLanguage(event.target.value)}
      >
        <option value="pt-BR">PT-BR</option>
        <option value="en">EN</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}
