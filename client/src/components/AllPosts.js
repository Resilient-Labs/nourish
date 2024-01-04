import SocialButtons from "./SocialButtons"
import CommentButtons from "./CommentButtons"
import CommentBox from "./CommentBox"

export default function AllPosts({ posts, setPosts }) {
  const updateLikes = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8000/post/likePost/${postId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      })

      if (response.ok) {
        // Update local state using setPosts from parent
        setPosts((currentPosts) => {
          return currentPosts.map((post) => {
            if (post._id === postId) {
              return { ...post, likes: post.likes + 1 } // Increment likes count
            }
            return post
          })
        })
      } else {
        console.error("Failed to like the post", await response.json())
      }
    } catch (error) {
      console.error("There was an error liking the post: ", error)
    }
  }

  const deleteComment = async (commentId, postId) => {
    try {
      const response = await fetch(`http://localhost:8000/post/deleteComment/${commentId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      })

      if (response.ok) {
        setPosts((currentPosts) =>
          currentPosts.map((post) => {
            if (post._id === postId) {
              // Filter out deleted comment
              return {
                ...post,
                comments: post.comments.filter(
                  (comment) => comment._id !== commentId
                )
              }
            }
            return post
          })
        )
        window.location.reload()
      } else {
        console.error("Failed to delete the comment", await response.json())
      }
    } catch (error) {
      console.error("There was an error deleting the comment: ", error)
    }
  }

  const deletePost = async (postId) => {
    try {
      const response = await fetch(`http://localhost:8000/post/deletePost/${postId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      })
      if (response.ok) {
        // Update local state using setPosts from parent
        setPosts((currentPosts) =>
          currentPosts.filter((post) => post._id !== postId)
        )
      } else {
        console.error("Failed to delete the post", await response.json())
      }
    } catch (error) {
      console.error("There was an error deleting the post: ", error)
    }
  }

  return (
    <div className="container">
      {posts.map((post) => (
        <div
          key={post._id}
          className="message bg-white p-5 mb-4 rounded shadow"
        >
          <div className="messageBoard--contentLeft">
            <div className="communityBoard--header">
              <h3 className="message-title text-xl font-semibold -mb-2 flex items-center">
                {post.title}
                <span className="flex my-1 ml-auto">
                  <div className="text-3xl mr-3">{post.likes}</div>
                  <SocialButtons
                    postId={post._id}
                    onLike={() => updateLikes(post._id)}
                    onDelete={() => deletePost(post._id)}
                  />
                </span>
              </h3>
              <p className="communityBoard--user">
                By: {post.user.firstName} {post.user.lastName}
              </p>
              <h2>
                {post.tags.length > 0 ? (
                  <div>
                    {post.tags.map((tag, index) => (
                      <div key={index} className="communityBoard--tags">
                        {tag}
                      </div>
                    ))}
                  </div>
                ) : (
                  []
                )}
              </h2>
            </div>
            <p className="message-content text-gray-700 mb-4">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                className="communityBoard--img"
                alt="postIMG"
              />
            )}
          </div>
          <div className="comments-section">
            <CommentBox postId={post._id} className="commentBox" />
            <h3 className="comments-title text-lg font-semibold mb-2">
              Comments
            </h3>
            {post.comments && post.comments.length > 0 ? (
              post.comments.map((comment) => (
                <div
                  key={comment._id}
                  className="comment bg-gray-100 p-3 mb-2 rounded"
                >
                  <p className="comment-author text-sm font-semibold">
                    {comment.user.firstName} {comment.user.lastName} says:
                  </p>
                  <p className="comment-content text-gray-700">
                    {comment.comment}
                  </p>
                  <CommentButtons
                    commentId={comment._id}
                    commentUserId={comment.user._id}
                    onDelete={deleteComment}
                  />
                </div>
              ))
            ) : (
              <p>No comments yet. Be the first to comment!</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
