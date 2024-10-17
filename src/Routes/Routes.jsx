import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../Components/ui/Loading";

const Main=lazy(()=> import('../Components/Pages/Main'))
const Aboutme=lazy(()=> import('../Components/ui/Aboutme/Aboutme'))
const Services=lazy(()=> import('../Components/ui/Services/Services'))
const Blogs=lazy(()=> import('../Components/ui/Blogs/Blogs'))

 export const router=createBrowserRouter([
    {
        path:'/',
        element:<Suspense fallback={<Loading/>}>
                  <Main/>
                 </Suspense>,
       children:[
         {
            path:'/aboutme',
            element:<Suspense fallback={<Loading/>}>
                     <Aboutme/>
                    </Suspense>
          },
          {
            path:'/services',
            element:<Suspense fallback={<Loading/>}>
                     <Services/>
                    </Suspense>
          },
          {
            path:'/blog',
            element:<Suspense fallback={<Loading/>}>
                     <Blogs/>
                    </Suspense>
          }
       ]

    },
   

 ])