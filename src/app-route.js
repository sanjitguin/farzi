
import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import ProductDetails from './pages/product-details'


const appRouters = [
{
    path: "/",
    compoment: Home,
    text: "Home"
},
{
    path: "/about",
    compoment: About,
    text: "About"
},
{
    path: "/products",
    compoment: Product,
    text: "Products"
},
{
    path: "/products/:id",
    compoment: ProductDetails,
    text: "Product"
}

]

export default appRouters;