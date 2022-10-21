import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <div>{t("key1.key2")}</div>
    </div>
  );
}

export default App;
