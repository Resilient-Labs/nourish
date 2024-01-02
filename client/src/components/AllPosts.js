import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"; // using react-router for redirection
import SocialButtons from './SocialButtons'
import CommentBox from './CommentBox'



function PostList() {
  const [getAllPosts, setGetAllPosts] = useState({ posts: [] });
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:8000/post/board", {
          credentials: 'include', //needed to check ensureAuth -Ro
        });
        if (!response.ok) {
          if (response.status === 401) {
            // Redirect to login page if unauthorized
            navigate('/login');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGetAllPosts(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation: ", error);
      }
    };

    fetchPosts();
  }, [navigate]);

  return (
    <div className="message-board bg-gray-100 p-5 rounded-lg">
      <h2 className="message-board-title text-2xl font-bold mb-5">All Posts</h2>
      {getAllPosts.posts.map((post) => (
        <div key={post._id} className="message bg-white p-5 mb-4 rounded shadow">
          <h3 className="message-title text-xl font-semibold mb-2">
            {post.title}
          </h3>
          <p className="message-content text-gray-700">{post.content}</p>
          <div><img src={post.image} alt="postIMG"/></div>
          <div>{post.tags.length > 0 ? (
                            <div>
                                {post.tags.map((tag, index) => (
                                    <div key={index}>{tag} </div> 
                                ))}
                            </div>
                        ) : (
                            []
                        )}</div>
          <div className="flex my-3">
            <div className="text-4xl mr-4">
              {post.likes}
            </div>
            <SocialButtons /> 
          </div>
          <CommentBox />
        </div>
      ))}
    </div>
  )
}

export default PostList
