import "./App.scss";
import AuthInputPassword from "@components/AuthInputPassword/AuthInputPassword";

function App() {
  return (
    <div className="app__container">
      <div className="app__auth">
        <AuthInputPassword />
      </div>
    </div>
  );
}

export default App;
