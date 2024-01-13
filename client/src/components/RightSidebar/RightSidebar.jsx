import React from 'react'
import './RightSidebar.css'
import widget from './Widget'
import widgetTags from './WidgetTags'




const RightSidebar = () => {
  return (
   <aside className='right-sidebar'>
    <widget />
    <widgetTags />
   </aside>
  )
}

export default RightSidebar