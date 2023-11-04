
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


export const appMenuItems = [
        {id:0, text:"Android", path:"/browse/android", border:"#FF008C"}, 
        {id:1, text:"iOS", path:"/browse/ios", border:"#D309E1"}, 
        {id:2, text: "Web", path:"/browse/web", border:"#9C1AFF"}, 
        {id:3, text:"About",path:"/about", border:"#7700FF"}, 
        {id:4, text:"Products", path:"/browse/products", border:"#4400FF"}
    ];

export default appRouters;