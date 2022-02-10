import './App.scss';

export function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>
        This is a simple example of a React application with multi languages.
      </p>

      <select name="language" id="language">
        <option value="en">EN</option>
        <option value="pt-BR">PT-BR</option>
      </select>
    </div>
  );
}
