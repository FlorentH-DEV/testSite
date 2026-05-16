import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import {store} from '../../../redux/store/store'
import RouterConfig from '../routerConfig/RouterConfig'

const LayoutSelector = (props) => {
    console.log('1111')
    return (
        <Provider store={store}>
            <RouterConfig/>
        </Provider>
    )
}

export default LayoutSelector
