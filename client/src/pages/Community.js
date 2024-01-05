import { useState, useEffect } from "react"
import CommunityWelcome from "../components/WelcomeCommunity"
import Footer from "../components/Footer"
import MessageBoardInteractive from "../components/MessageBoardInteractive"

const API_URL = process.env.REACT_APP_API_URL

export default function Community() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${API_URL}/post/board`, {
        credentials: "include"
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setPosts(data.posts)
    } catch (error) {
      console.error("Error fetching posts: ", error)
    }
  }

  const handleNewPost = () => {
    fetchPosts() // Re-fetch posts after new post is submitted
  }

  return (
    <div>
      <CommunityWelcome />
      <MessageBoardInteractive
        onNewPost={handleNewPost}
        posts={posts}
        setPosts={setPosts}
      />
      <Footer />
    </div>
  )
}
