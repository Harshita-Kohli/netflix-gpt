import Body from './components/Body';
import appStore from './utils/AppStore';

function App() {
  return (
    <Provider store = {appStore}></Provider>
    <Body />
  );
}

export default App;
