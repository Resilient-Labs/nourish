import React from "react"
import CommunityWelcome from "../components/WelcomeCommunity"
import Navbar from "../components/Navbar"
import CommunityInvolvement from "../components/CommunityInvolvement"
import CommunityFooter from "../components/CommunityFooter"
import MessageBoard from "../components/MessageBoardInfo"
import MessageBoardInteractive from "../components/MessageBoardInteractive"

export default function Community() {
	return (
		<div>
			<Navbar />
			<CommunityWelcome />
			<MessageBoard />
			<MessageBoardInteractive />
			<h1>Unicorn</h1>
			<h2>Hi</h2>
			<CommunityInvolvement />
			<CommunityFooter />
		</div>
	)
}
