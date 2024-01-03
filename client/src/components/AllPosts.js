import React, { useEffect, useState } from "react"
import SocialButtons from './SocialButtons'
import CommentBox from './CommentBox'



function PostList({ posts, setPosts }) {

  const updateLikes = async (postId) => {
    try {
        const response = await fetch(`http://localhost:8000/post/likePost/${postId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include', 
        });

        if (response.ok) {
            // Update the local state using the setPosts passed from the parent component
            setPosts(currentPosts => {
                return currentPosts.map(post => {
                    if (post._id === postId) {
                        // Increment the likes count
                        return { ...post, likes: post.likes + 1 };
                    }
                    return post;
                });
            });
        } else {
            console.error("Failed to like the post", await response.json());
        }
    } catch (error) {
        console.error("There was an error liking the post: ", error);
    }
};


const deletePost = async (postId) => {
  try {
      const response = await fetch(`http://localhost:8000/post/deletePost/${postId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
          },
          credentials: 'include',
      });

      if (response.ok) {
          // Update the local state using the setPosts passed from the parent component
          setPosts(currentPosts => currentPosts.filter(post => post._id !== postId));
      } else {
          console.error("Failed to delete the post", await response.json());
      }
  } catch (error) {
      console.error("There was an error deleting the post: ", error);
  }
};

  return (
    <div className="message-board bg-gray-100 p-5 rounded-lg">
      <h2 className="message-board-title text-2xl font-bold mb-5">All Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="message bg-white p-5 mb-4 rounded shadow">
          <h3 className="message-title text-xl font-semibold mb-2">
            {post.title}
          </h3>


          {/* adding user info */}
          <p className="post-author text-gray-500">Posted by: {post.user.firstName} {post.user.lastName}</p>

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
            <SocialButtons postId={post._id} onLike={() => updateLikes(post._id)} onDelete={()=>deletePost(post._id)}/> 
          </div>
          <CommentBox />
        </div>
      ))}
    </div>
  )
}

export default PostList
