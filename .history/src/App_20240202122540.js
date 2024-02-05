import Body from './components/Body';
import appStore from 'appStore';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
