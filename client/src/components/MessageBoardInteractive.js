import React from "react"

function MessageBoardInteractive(props) {
	return (
		<form className="bg-white flex flex-col md:flex-row gap-4 p-4 md:p-8 rounded-md border border-neutral-800 border-opacity-60">
			<div className="flex flex-col gap-4 md:w-1/2">
				<h2 className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
					Got an update or request? Leave your notes here!
				</h2>
				<div className="flex items-center gap-4">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/5302b52be1773e756f7e1bd2751d98f5a99b7cc6da2241e01bd640cb8e3584b8?apiKey=24893b07929841ac8f1197a89a1bfe80&"
						alt="Background"
						className="h-32 w-32 object-cover rounded-md"
					/>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded-md"
					>
						SUBMIT
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-4 md:w-1/2">
				<h2 className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
					Upload a photo of the inside of the fridge to let others know what’s
					there
				</h2>
				<div className="bg-orange-600 flex items-center justify-center py-2 px-4 rounded-md">
					<img
						loading="lazy"
						src="https://cdn.builder.io/api/v1/image/assets/TEMP/6722fbd24a7871038616f6ed0165f2e573878934c27af360d6748ddf5c2ddb06?apiKey=24893b07929841ac8f1197a89a1bfe80&"
						alt="Upload Icon"
						className="h-6 w-6"
					/>
					<span className="text-white font-bold ml-2">UPLOAD PHOTO</span>
				</div>
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cdede62a8b4ab1216c8f8be6e05c0faa7f5d61b1542a8d3fda20b773757ee01?apiKey=24893b07929841ac8f1197a89a1bfe80&"
							alt="Post Topic Icon"
							className="h-6 w-6"
						/>
						<div className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
							Select Post Topic
						</div>
					</div>
					<div className="flex items-center gap-4">
						<img
							loading="lazy"
							src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cdede62a8b4ab1216c8f8be6e05c0faa7f5d61b1542a8d3fda20b773757ee01?apiKey=24893b07929841ac8f1197a89a1bfe80&"
							alt="Fridge Location Icon"
							className="h-6 w-6"
						/>
						<div className="text-neutral-800 text-opacity-80 text-lg tracking-wide">
							Select Fridge Location
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4 md:w-1/2">
				<div className="text-neutral-800 text-opacity-80 text-xs tracking-wide border justify-center items-center py-2 rounded-md border-solid border-neutral-800 border-opacity-60">
					Date
				</div>
				<div className="text-neutral-800 text-opacity-80 text-xs tracking-wide border items-center py-2 rounded-md border-solid border-neutral-800 border-opacity-60">
					12/19/2023
				</div>
			</div>
		</form>
	)
}

export default MessageBoardInteractive
