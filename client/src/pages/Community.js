import React, { useState, useEffect } from "react"
import CommunityWelcome from "../components/WelcomeCommunity"
import Navbar from "../components/Navbar"
import CommunityInvolvement from "../components/CommunityInvolvement"
import Footer from "../components/Footer"
import MessageBoard from "../components/MessageBoardInfo"
import MessageBoardInteractive from "../components/MessageBoardInteractive"
import AllPosts from "../components/AllPosts"

export default function Community() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      fetchPosts();
  }, []);

  const fetchPosts = async () => {
      try {
          const response = await fetch("http://localhost:8000/post/board", {
            credentials: 'include',
          });
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setPosts(data.posts);
      } catch (error) {
          console.error("Error fetching posts: ", error);
      }
  };

  const handleNewPost = () => {
      fetchPosts(); // Re-fetch posts after a new post is submitted
  };

  return (
    <div>
      <Navbar />
      <CommunityWelcome />
      <MessageBoard />
      <MessageBoardInteractive onNewPost={handleNewPost}/>
      <AllPosts posts={posts} setPosts={setPosts}/>
      <CommunityInvolvement />
      <Footer />
    </div>
  )
}
