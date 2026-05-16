import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SelectChalet = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/chalet1')
    }, [])
    

    console.log('SelectChalet')
    return (
        <Fragment></Fragment>
    )
}

export default SelectChalet
