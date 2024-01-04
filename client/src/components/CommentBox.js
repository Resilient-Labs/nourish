import { Button, Textarea } from "flowbite-react"
import { useState } from "react"

export default function CommentBox({ postId }) {
  const [comment, setComment] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const commentData = {
      comment: comment
    }

    try {
      const response = await fetch(`http://localhost:8000/post/addComment/${postId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(commentData)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setComment("") // Reset comment field
      window.location.reload()
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          required
          rows={4}
        />
        <Button
          type="submit"
          className="bg-green-500 text-white py-1 px-2 rounded-md ml-auto"
        >
          Submit
        </Button>
      </form>
    </div>
  )
}
