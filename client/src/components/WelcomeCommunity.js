import React from "react"

function CommunityWelcome(props) {
	return (
		<section className="bg-white flex flex-col items-center mb-24 pt-12 px-16 max-md:max-w-full max-md:mb-10 max-md:px-5">
			<header className="z-[1] w-full max-w-[1412px] mt-16 -mb-1 max-md:max-w-full max-md:mt-10">
				<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
					<div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
						<div className="flex flex-col items-stretch mt-20 max-md:max-w-full max-md:mt-10">
							<h1 className="text-black text-6xl font-medium -ml-1 -mr-px -mb-0.5 max-md:max-w-full max-md:text-4xl">
								Welcome to the Community
							</h1>
							<p className="text-black text-xl leading-7 mt-16 max-md:max-w-full max-md:mt-10">
								Blurb about community guidelines <br /> Instruction on how to
								use message board <br /> instruction on how to use task board
							</p>
							<div className="flex justify-between gap-5 mt-8 items-start max-md:max-w-full max-md:flex-wrap">
								<div className="flex grow basis-[0%] flex-col justify-center items-stretch">
									<a
										href="#"
										className="text-white text-center text-lg whitespace-nowrap bg-black justify-center items-stretch px-10 py-6 rounded-md max-md:px-5"
									>
										Message Board
									</a>
								</div>
								<div className="flex grow basis-[0%] flex-col justify-center items-stretch">
									<a
										href="#"
										className="text-white text-center text-lg whitespace-nowrap bg-black justify-center items-stretch px-14 py-6 rounded-md max-md:px-5"
									>
										Task Board
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
						<div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
							<form
								className="rounded border bg-white flex flex-col ml-36 -mr-0.5 pt-4 pb-12 border-solid border-black items-start max-md:max-w-full"
								aria-label="Community Images Form"
							>
								<div className="form-group flex items-center">
									<div className="browser-window">
										<div className="browser-dots">
											<span className="browser-dot"></span>
											<span className="browser-dot"></span>
											<span className="browser-dot"></span>
										</div>
										<div className="browser-content flex items-center">
											<label htmlFor="image-1-input" className="sr-only">
												Image Input 1
											</label>
											<input
												id="image-1-input"
												type="text"
												className="stroke-[1px] flex w-3 shrink-0 h-3 flex-col rounded-[50%]"
												aria-label="Image Input 1"
												role="textbox"
											/>
											<label htmlFor="image-2-input" className="sr-only">
												Image Input 2
											</label>
											<input
												id="image-2-input"
												type="text"
												className="stroke-[1px] flex w-3 shrink-0 h-3 flex-col rounded-[50%]"
												aria-label="Image Input 2"
												role="textbox"
											/>
											<label htmlFor="image-3-input" className="sr-only">
												Image Input 3
											</label>
											<input
												id="image-3-input"
												type="text"
												className="stroke-[1px] flex w-3 shrink-0 h-3 flex-col rounded-[50%]"
												aria-label="Image Input 3"
												role="textbox"
											/>
											<span className="text-black text-center text-lg grow shrink basis-auto mt-2 pr-36 mx-auto">
												Fridge/ Community Images
											</span>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 mx-auto">
										<div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
											<img
												loading="lazy"
												srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc46f7867fecb33057d42d9be9803951986bda5d4b729f28791f572d1b2358?apiKey=24893b07929841ac8f1197a89a1bfe80&"
												className="aspect-[1.37] object-cover object-center w-full overflow-hidden z-[1] max-w-[268px] mb-2 mx-auto max-md:max-w-full"
												alt="Community Image 1"
											/>
										</div>
										<div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
											<img
												loading="lazy"
												srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c7c04132f894addb59b888864fd0a3f4e98c8073fffd13ecd75cabff0b3ed533?apiKey=24893b07929841ac8f1197a89a1bfe80&"
												className="aspect-[100] object-contain object-center w-full overflow-hidden grow max-w-[159px] mr-auto"
												alt="Community Image 2"
											/>
										</div>
									</div>
								</div>
								<img
									loading="lazy"
									srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d3990573d218cb4bd0aa12848f9c6ebc066f520099e75a2cc94d0cde1d4edbb?apiKey=24893b07929841ac8f1197a89a1bfe80&"
									className="aspect-[3.03] object-contain object-left w-full overflow-hidden max-w-[428px] mx-auto max-md:max-w-full"
									alt="Community Image 3"
								/>
							</form>
						</div>
					</div>
				</div>
			</header>
		</section>
	)
}

export default CommunityWelcome
