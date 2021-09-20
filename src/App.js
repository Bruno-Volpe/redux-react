import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import GlobalStyle from './styles/globalstyles'
import store from './store'

import Header from './components/Header';
import Routers from './routes'
import history from './services/history';

function App() {
  return (
    <Provider store={store} >
      <Router history={history}>
        <Header />
        <Routers />
        <GlobalStyle />
        <ToastContainer autoClose={3000} position="top-right" className="toast-container" />
      </Router>
    </Provider>
  );
}

export default App;

