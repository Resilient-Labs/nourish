import React from "react"

function CommunityInvolvement(props) {
	return (
		<div className="bg-zinc-100 z-[1] flex w-full flex-col justify-center items-center px-16 py-12 max-md:max-w-full max-md:px-5">
			<div className="flex w-[520px] max-w-full flex-col items-stretch mt-20 mb-14 max-md:my-10">
				<header className="text-black text-center text-2xl font-bold leading-8 max-md:max-w-full">
					{" "}
					Want to Get Involved in Your Community?{" "}
				</header>
				<p className="text-black text-center text-xl leading-7 self-center max-w-[422px] mt-12 max-md:max-w-full max-md:mt-10">
					{" "}
					Create a user profile today and volunteer for opportunities to help
					our fridges stay full and ready for the community!{" "}
				</p>
				<button
					className="text-white text-center text-lg bg-black self-center w-[234px] max-w-full justify-center items-center mt-8 px-16 py-6 rounded-md max-md:px-5"
					aria-label="Sign Up"
				>
					{" "}
					Sign Up{" "}
				</button>
			</div>
		</div>
	)
}
export default CommunityInvolvement
