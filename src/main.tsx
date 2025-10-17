import ReactDOM from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { router } from './router/router';
import Loader from './components/ui/loader/Loader';

const rootElem = document.getElementById('root');

if(rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
    </Provider>
  );
}



