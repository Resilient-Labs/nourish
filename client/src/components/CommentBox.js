import { Label, Textarea } from 'flowbite-react';
import React, { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

export default function CommentBox ({postId}) {
    const [reply, setReply] = useState("")
    // const { postId } = useParams();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const handleSubmit = async (e) => {
        e.preventDefault()
        // Create FormData object
        const formData = new FormData();
        formData.append('comment', reply); 
        try {
          // Make API call to submit the form data to the server
        const response = await fetch(`http://localhost:8000/post/addComment/${postId}`, {
            method: "POST",
            // headers: {
            //   "Content-Type": "application/json"
            // },
            credentials: 'include', //This is needed for ensureAuth to work!! -Ro
            body: formData
        })
        console.log(formData)
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
          // Handle the response from the server
        const data = await response.json()
        console.log(data) 
          // Reset the form fields
            setReply("")
        } catch (error) {
            console.error("There was a problem with the fetch operation: ", error)
        }
        }
      //acts like a catch error
        // if (isLoading) {
        // return <p>Loading comment data...</p>;
        // }
        // if (error) {
        // return <p>Error fetching data: {error.message}</p>;
        // }
    return (
        <div className="max-w-md">
            <div className="mb-2 block">
                <form onSubmit={handleSubmit}>
                <Label htmlFor="comment" value="Reply" />
                <Textarea 
                    type="text" 
                    id="comment" name="comment" 
                    value={reply} onChange={(e) => setReply(e.target.value)} 
                    placeholder="Leave a comment..." 
                    required rows={4} />
                <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >SUBMIT</button>
                </form>
            </div>
        </div>
    );
}