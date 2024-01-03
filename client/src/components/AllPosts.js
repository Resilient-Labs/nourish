import React, { useEffect, useState } from "react"
import SocialButtons from './SocialButtons'
import CommentBox from './CommentBox'

function PostList({ posts, setPosts }) {
 const updateLikes = async (postId) => {
   try {
       console.log("setPosts prop:", setPosts);
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
console.log("setPosts prop:", setPosts);


 return (
   <div>
     {posts.map((post) => (
       <div key={post._id} className="message bg-white p-5 mb-4 rounded shadow">
         <div className="communityBoard--header">
           <h3 className="message-title text-xl font-semibold mb-2 flex items-center">
             {post.title}
             <span className="communityBoard--user ml-2">By: {post.user.firstName} {post.user.lastName}</span>
           </h3>
           <h2>
               {post.tags.length > 0 ? (
                 <div>
                   {post.tags.map((tag, index) => (
                     <div key={index} className="communityBoard--tags">{tag}</div>
                   ))}
                 </div>
               ) : (
                 []
               )}
           </h2>
         </div>


        
         <p className="message-content text-gray-700">{post.content}</p>
         <div><img src={post.image} className="communityBoard--img" alt="postIMG"/></div>
         <div className="flex my-3">
           <div className="text-4xl mr-4">
             {post.likes}
           </div>
           <SocialButtons postId={post._id} onLike={() => updateLikes(post._id)} onDelete={()=>deletePost(post._id)}/>
         </div>
         <CommentBox postId={post._id}/>
       </div>
     ))}
   </div>
 )
}


export default PostList