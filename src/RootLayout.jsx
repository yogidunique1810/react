import { Outlet } from "react-router-dom"
import NavbarComponent from "./components/NavbarComponent"
import {Provider} from 'react-redux'
import { store } from './store/store.js'
const RootLayout = () => {
    return(
    <>
    <Provider store={store}>
        <NavbarComponent/>
        <main style={{margin:"25px auto"}}>
            <Outlet/>
        </main>
    </Provider>
    </>
    )   
}
export default RootLayout