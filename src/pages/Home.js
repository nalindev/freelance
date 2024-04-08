import React from 'react'
import CategoryCrowsel from '../components/CategoryCrowsel'
import Introduction from '../components/Introduction'
import BlogSlider from '../components/BlogSlider'
import Search from '../components/search'

const Home = () => {
  return (
    <div>
      <CategoryCrowsel/>
      <Introduction/>
      <BlogSlider/>
      <Search />
    </div>
  )
}

export default Home
