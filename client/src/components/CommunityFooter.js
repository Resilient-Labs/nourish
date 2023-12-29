import React from "react"

function FooterComponent(props) {
	return (
		<div className="bg-white flex mt-0 w-full flex-col justify-center px-16 py-8 items-start max-md:max-w-full max-md:px-5">
			<header className="text-black text-center text-2xl font-bold uppercase grow whitespace-nowrap mt-9">
				Footer
			</header>
			<div className="self-stretch flex justify-between gap-5 pr-20 items-start max-md:max-w-full max-md:flex-wrap max-md:pr-5">
				<div className="flex grow basis-[0%] flex-col items-stretch mt-10 max-md:mt-10">
					<div className="text-black text-sm font-bold leading-5">
						Latest Blog Post
					</div>
					<div className="text-black text-2xl leading-8 mt-6">
						Ready to get started?
					</div>
					<div className="text-black text-sm leading-5 mt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</div>
				</div>
				<img
					loading="lazy"
					src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d843c33bb53fd42403a0fec2fed414e8e0dec24aad1e33f2d1364058594064b?apiKey=24893b07929841ac8f1197a89a1bfe80&"
					className="aspect-[0] object-contain object-center w-px stroke-[1px] stroke-black overflow-hidden self-stretch shrink-0 max-w-full"
				/>
				<div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
					<div className="flex justify-between gap-5 items-start">
						<div className="flex flex-col items-stretch">
							<div className="text-black text-sm font-bold leading-5 whitespace-nowrap">
								Product
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-8">
								Product
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-5">
								Product
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-5">
								Product
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-5">
								Product
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-5">
								Product
							</div>
						</div>
						<div className="self-stretch flex flex-col items-stretch">
							<div className="text-black text-sm font-bold leading-5 whitespace-nowrap">
								Company
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-7">
								Company
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
								Company
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
								Company
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
								Company
							</div>
							<div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
								Company
							</div>
						</div>
					</div>
					<div className="flex justify-between gap-5 mt-20 items-start max-md:mt-10">
						<a
							href="#"
							className="text-black text-center text-sm leading-5 grow whitespace-nowrap"
							aria-label="Years"
							role="link"
						>
							© 2010 — 2020
						</a>
						<a
							href="#"
							className="text-black text-center text-sm leading-5 self-stretch grow whitespace-nowrap"
							aria-label="Privacy and Terms"
							role="link"
						>
							Privacy — Terms
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FooterComponent
