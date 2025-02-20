import {Outlet, useNavigation} from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

export const AppLayout = () => {
const navigation=useNavigation();
    return (
        <>
            <Header />
         
                
                 {navigation.state === "loading" && <Loading />}
               
            <Outlet/>
            <Footer/>

        </>
    )
}