import React, { useState } from "react"

//

function MessageBoardInteractive() {
 
  // const [formData, setFormData] = useState({
  //   title: "",
  //   content: "",
  //   photo: null,
  // });
  const [notes, setNotes] = useState("")
  const [photo, setPhoto] = useState(null)
  const [postTopic, setPostTopic] = useState("")
  const [fridgeLocation, setFridgeLocation] = useState("")

  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()

    // const message = new FormData();
    // message.append("title", formData.title);
    // message.append("content", formData.content);
    // message.append("image", formData.photo);

    // Create a new message object
    // const message = {
    //   title: e.target.title.value,
    //   content: e.target.content.value,
    //   image: e.target.image.value,
    //   postTopic,
    //   fridgeLocation
    // }

     // Create a new message object
     const message = {
      notes,
      photo,
      postTopic,
      fridgeLocation
    }
  

    try {
      // Make API call to submit the form data to the server
      const response = await fetch("http://localhost:8000/post/createPost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include', //This is needed for ensureAuth to work!! -Ro
        body: JSON.stringify(message)
      })

      console.log(message)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      // Handle the response from the server
      const data = await response.json()
      console.log(data) // Assuming the response contains the saved message object

      // Reset the form fields
      // setFormData({ title: "", content: "", photo: null });

      setNotes("")
      setPhoto(null)
      setPostTopic("")
      setFridgeLocation("")
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error)
    }
  }

  // const handlePhotoUpload = (e) => {
  //   setFormData({ ...formData, photo: e.target.files[0] });
  // };


  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  const handlePostTopicClick = async () => {
    try {
      // Make API call to get post topics from the server
      const response = await fetch("/api/postTopics")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      // Handle the response from the server
      console.log(data)
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error)
    }
  }

  const handleFridgeLocationClick = async () => {
    try {
      // Make API call to get fridge locations from the server
      const response = await fetch("/api/fridgeLocations")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      // Handle the response from the server
      console.log(data)
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error)
    }
  }

  return (
    <div>
      <form
        className="bg-white flex flex-col md:flex-row gap-4 p-4 md:p-8 rounded-md border border-neutral-800 border-opacity-60"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
            Got an update or request? Leave your notes here!
          </h2>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="h-10 px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            SUBMIT
          </button>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <h2 className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
            Upload a photo of the inside of the fridge to let others know what’s
            there
          </h2>
          <div className="bg-orange-600 flex items-center justify-center py-2 px-4 rounded-md">
            <label htmlFor="photo-upload" className="cursor-pointer">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6722fbd24a7871038616f6ed0165f2e573878934c27af360d6748ddf5c2ddb06?apiKey=24893b07929841ac8f1197a89a1bfe80&"
                alt="Upload Icon"
                className="h-6 w-6"
              />
              <span className="text-white font-bold ml-2">UPLOAD PHOTO</span>
            </label>
            <input
              id="photo-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cdede62a8b4ab1216c8f8be6e05c0faa7f5d61b1542a8d3fda20b773757ee01?apiKey=24893b07929841ac8f1197a89a1bfe80&"
                alt="Post Topic Icon"
                className="h-6 w-6"
              />
              <button
                onClick={handlePostTopicClick}
                className="text-neutral-800 text-opacity-80 text-lg tracking-wide"
              >
                Select Post Topic
              </button>
            </div>
            <div className="flex items-center gap-4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cdede62a8b4ab1216c8f8be6e05c0faa7f5d61b1542a8d3fda20b773757ee01?apiKey=24893b07929841ac8f1197a89a1bfe80&"
                alt="Fridge Location Icon"
                className="h-6 w-6"
              />
              <button
                onClick={handleFridgeLocationClick}
                className="text-neutral-800 text-opacity-80 text-lg tracking-wide"
              >
                Select Fridge Location
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default MessageBoardInteractive
