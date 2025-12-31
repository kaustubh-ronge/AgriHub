import Shop from '@/components/Shop';
import { getAllNurseries, getCategories } from '@/sanity/queries';
import React from 'react'

const ShopPage = async () => {

  const categories = await getCategories();
  const nurseries = await getAllNurseries()

  return (
    <div className='bg-white'>
      <Shop categories={categories} nurseries={nurseries} />
    </div>
  )
}

export default ShopPage
