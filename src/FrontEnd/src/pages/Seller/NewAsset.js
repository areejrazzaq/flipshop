import React from 'react'
import Title from '../../Components/UI/Title/UserPageTitle'
import SellerFrom from '../../Components/SellerForm/DarazSellerForm'
function NewAsset() {
  return (
    <>
          <Title role='Seller' link='/seller' page='Listings'/>
        <div className='w-100'>
        <SellerFrom/>
        </div>
    </>
  )
}

export default NewAsset