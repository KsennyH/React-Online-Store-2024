import ReactDOM from 'react-dom/client';
import { RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import '../styles/index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import { router } from '../routes';
import { persistor, store } from '../store';
import { Loader } from '@/shared/ui';

const rootElem = document.getElementById('root');

if(rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
      </PersistGate>
    </Provider>
  );
}



