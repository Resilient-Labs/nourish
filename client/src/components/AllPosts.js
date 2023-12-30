import React, { useEffect, useState } from "react"

function PostList() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // Make API call to get all posts from the server
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error("There was a problem with the fetch operation: ", error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="message-board bg-gray-100 p-5 rounded-lg">
      <h2 className="message-board-title text-2xl font-bold mb-5">All Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="message bg-white p-5 mb-4 rounded shadow">
          <h3 className="message-title text-xl font-semibold mb-2">
            {post.title}
          </h3>
          <p className="message-content text-gray-700">{post.content}</p>
        </div>
      ))}
    </div>
  )
}

export default PostList
