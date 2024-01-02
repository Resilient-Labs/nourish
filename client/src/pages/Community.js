import React from "react"
import CommunityWelcome from "../components/WelcomeCommunity"
import Navbar from "../components/Navbar"
import CommunityInvolvement from "../components/CommunityInvolvement"
import Footer from "../components/Footer"
import MessageBoard from "../components/MessageBoardInfo"
import MessageBoardInteractive from "../components/MessageBoardInteractive"
import AllPosts from "../components/AllPosts"

export default function Community() {
  return (
    <div>
      <Navbar />
      <CommunityWelcome />
      <MessageBoard />
      <MessageBoardInteractive />
      <AllPosts />
      <CommunityInvolvement />
      <Footer />
    </div>
  )
}
