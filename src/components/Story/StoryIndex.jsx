import React from 'react'
import { BrowserRouter , NavLink, Routes, Route, Navigate,Link} from 'react-router-dom'
import StoryReels from './StoryReels'
import StoryPost from './StoryPost'
import StoryFeeds from './StoryFeeds'

function Story() {
  return (
    <div className="col-md-8 col-lg-6 vstack gap-4">
        <StoryReels />
        <StoryPost />
        <StoryFeeds />
    </div>
  )
}

export default Story