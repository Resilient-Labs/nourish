import React, { useState, useEffect } from "react"
import AllPosts from "../components/AllPosts"
import PropTypes from "prop-types"

function MessageBoardInteractive({ onNewPost, posts, setPosts }) {

  // set up states
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [photo, setPhoto] = useState(null)
  const [tags, setTags] = useState([]);
  const [getAllFridges, setGetAllFridges] = useState({ fridges: [] });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [postTopic, setPostTopic] = useState("")
  const [fridgeLocation, setFridgeLocation] = useState("")

//fetch all fridge info

  useEffect(() => {
    const fetchAllFridges = async () => {
      try {
        const response = await fetch(`http://localhost:8000/fridge/getAllFridges`) // req to BE
        const data = await response.json()
        setGetAllFridges(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllFridges();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()


    // Create FormData object
    const formData = new FormData();
    formData.append('file', photo); 
    formData.append('title', title);
    formData.append('content', content)
    formData.append('tags', JSON.stringify(tags)); // Convert array to JSON string
    formData.append('postTopic', postTopic);
    formData.append('fridgeLocation', fridgeLocation);


    try {
      // Make API call to submit the form data to the server
      const response = await fetch("http://localhost:8000/post/createPost", {
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

      setTitle("")
      setContent("")
      setPhoto(null)
      setTags([]); // Reset tags
      setPostTopic("")
      setFridgeLocation("")
      onNewPost();
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error)
    }
  }


  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    setPhoto(file)
  }

  const handleSelectChange = (event) => {
    const selectedTag = event.target.value;
    if (selectedTag && !tags.includes(selectedTag)) {
      setTags([...tags, selectedTag]);
    }
  };


  //acts like a catch error
  if (isLoading) {
    return <p>Loading fridge list data...</p>;
  }
  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
  <div className="messageForm">
  <div className="flex flex-col md:flex-row gap-4">
    <form className="bg-white flex flex-col md:w-1/4 gap-4 p-4 md:p-8" onSubmit={handleSubmit}>
    <div className="flex flex-col gap-4">
        <h2 className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
            Need help or have help to offer? Leave a message!
          </h2>
          <select id="locations" name="locations" onChange={handleSelectChange}>
            <option value="">Fridge Locations</option>
            {Array.from(new Set(getAllFridges.fridges.map(fridge => fridge.name))) //dynamically get zips from mdb
              .sort((a, b) => a - b) // sort drop down menu items for easy nav
              .map((location, index) => (
                <option key={index} value={location}>{location}</option>
            ))}
          </select>
          <select id="postTags" name="postTags" onChange={handleSelectChange}>
            <option value="">Post Topic</option>
            <option value="Food Request">Food Request</option>
            <option value="Food Delivery">Food Delivery</option>
            <option value="Food Contribution">Food Contribution</option>
            <option value="Fridge Hardware Maintenance">Fridge Hardware Maintenance</option>
            <option value="Fridge Cleaning Maintenance">Fridge Cleaning Maintenance</option>
            <option value="General">General</option>
          </select>
          <label for="title">Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="h-10 px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <label for="content">Message:</label>
          <textarea
            type="text"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="h-20 px-4 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <h2 className="text-neutral-800 text-opacity-80 text-lg tracking-wide"> Upload a photo of the inside of the fridge to let others know what’s there</h2>
          <div className="bg-green-500 flex items-center justify-center py-2 px-4 rounded-md">
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
              name="file"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">Submit</button>
        </div>
      </form>
      <div className="messageContainer md:w-3/4 p-4">
        <AllPosts posts={posts} setPosts={setPosts}/>
      </div>
    </div>
    </div>
  )
}

MessageBoardInteractive.propTypes = {
  onNewPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};

export default MessageBoardInteractive
