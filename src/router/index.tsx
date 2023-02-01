import { createBrowserRouter } from 'react-router-dom';
import Blocks from '../pages/blocks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blocks />,
  },
]);

export { router };
