import React, { Fragment } from 'react'
import Navbar from '../ui/Navbar'
import BlocImagePrincipale from './item/BlocImagePrincipale'
import ArrivalSection from './item/ArrivalSection'
import ADecouvrir from './item/ADecouvrir'
import { EquipmentSection } from './item/EquipementSection'
import DepartSection from './item/DepartSection'
import Footer from '../ui/Footer'

const ChaletOne = () => {

    return (
        <Fragment>  
            <Navbar/>

            <BlocImagePrincipale/>

            <ArrivalSection/>

            <EquipmentSection/>

            <ADecouvrir/>

            <DepartSection/>

            <Footer/>
        </Fragment>
    )
}

export default ChaletOne
