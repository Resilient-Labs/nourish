import React from "react"

function MessageBoard(props) {
	return (
		<form>
			<section className="bg-black pr-20 max-md:max-w-full max-md:pr-5">
				<header className="header gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
					<div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
						<div className="bg-neutral-800 flex grow flex-col justify-center w-full mt-9 py-12 items-start max-md:mt-10">
							<img
								loading="lazy"
								srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20db8094aacdad5dbdf08b3a928279e4197c24f7d3b5e841a4bff8aec0aec73f?apiKey=24893b07929841ac8f1197a89a1bfe80&"
								className="aspect-[1.8] object-contain object-center w-full overflow-hidden max-md:max-w-full"
								alt=""
							/>
						</div>
					</div>

					<div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
						<div className="flex flex-col items-stretch mt-14 max-md:mt-10">
							{/* Link a tag */}
							<a
								href="URL"
								className="text-white text-sm leading-5"
								aria-label="Link to Nourish Fridge Philadelphia"
								aria-role="link"
							>
								<span>Nourish Fridge Philadelphia</span>
							</a>
							<div className="text-white text-5xl mt-7 max-md:text-4xl">
								<span>Message Board</span>
							</div>
						</div>
						{/* Button div */}
						<div className="button-container">
							<button
								className="button"
								aria-label="Submit message"
								aria-role="button"
							>
								Submit
							</button>
						</div>
					</div>
				</header>
			</section>
		</form>
	)
}

export default MessageBoard
