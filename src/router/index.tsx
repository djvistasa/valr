import { createBrowserRouter } from 'react-router-dom';
import Blocks from '../pages/blocks';
import BlockDescription from '../pages/blockDescription';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Blocks />,
  },
  {
    path: '/block/:id',
    element: <BlockDescription />,
  },
]);

export { router };
