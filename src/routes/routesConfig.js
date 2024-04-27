import MainPage from "@containers/MainPage";
import CartPage from "@containers/CartPage/CartPage";

const routesConfig = [
    {
        path: '/Pizza',
        exact: 'true',
        element: <MainPage />
    },
    {
        path: '/cart',
        exact: 'true',
        element: <CartPage />
    },
]

export default routesConfig