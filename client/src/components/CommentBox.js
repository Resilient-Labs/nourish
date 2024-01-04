import { Button, Label, Textarea } from 'flowbite-react';
import React, { useState, useEffect } from "react"


export default function CommentBox({ postId }) {

    const [comment, setComment] = useState("")
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const commentData = {
            comment: comment
        };
    
        try {
            const response = await fetch(`http://localhost:8000/post/addComment/${postId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include',
                body: JSON.stringify(commentData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
    
            setComment(""); // Reset the comment field
        } catch (error) {
            console.error("There was a problem with the fetch operation: ", error);
        }
    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea id="comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)}placeholder="Leave a comment..." required rows={4} />
                <Button
                    type="submit"
                    className="bg-green-500 text-white py-1 px-2 rounded-md ml-auto"
                > 
                Submit 
                </Button>
            </form>
        </div>
    );
}