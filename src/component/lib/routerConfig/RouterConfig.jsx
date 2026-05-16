import { Fragment } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import routeApp from './app-route'

const RouterConfig = (props) => {
    console.log('routeApp', routeApp)
    return (
        <Routes>
            {
                <Fragment>
                    {
                        routeApp.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                element={route.component()}
                            />
                        ))
                    }
                    {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
                </Fragment>
            }
        </Routes>         
    )
}

export default RouterConfig 