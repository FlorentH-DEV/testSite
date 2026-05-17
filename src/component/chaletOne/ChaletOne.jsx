import React, { Fragment } from 'react'
import Navbar from '../ui/Navbar'
import BlocImagePrincipale from './item/BlocImagePrincipale'
import ArrivalSection from './item/ArrivalSection'
import ADecouvrir from './item/ADecouvrir'
import { EquipmentSection } from './item/EquipementSection'
import DepartSection from './item/DepartSection'
import Footer from '../ui/Footer'
import { AdressesSection } from './item/AdresseSection'
import ImageCarouselModal from './item/ImageCarrousselModal'

const ChaletOne = () => {

    return (
        <Fragment>  
            <Navbar/>

            <ImageCarouselModal/>

            <BlocImagePrincipale/>

            <ArrivalSection/>

            <EquipmentSection/>

            <AdressesSection/> 
            
            <ADecouvrir/>

            <DepartSection/>
            
            <Footer/>
        </Fragment>
    )
}

export default ChaletOne
