import Body from './components/Body';
import appStore from './utils/AppStore';
import {}
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
