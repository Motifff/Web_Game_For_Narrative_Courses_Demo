import test from '../views/test'
import test1 from '../views/test1'

const config = [
    {
        path: '/test',
        exact: true,
        meta: {
            title: '测试'
        },
        component:test,
    },
    {
        path: '/test1',
        exact: true,
        meta: {
            title: '测试1'
        },
        component:test1,
    }
];

export default config;