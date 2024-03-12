import config from '~/config';

import Home from '~/pages/Home';
import Holiday from '~/pages/Holiday';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.holiday,
        component: Holiday,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
