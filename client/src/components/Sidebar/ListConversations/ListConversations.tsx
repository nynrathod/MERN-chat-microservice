function ListConversations() {
	return (<>
		<div className="contacts p-2 flex-1 overflow-y-scroll">
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/women/61.jpg"
						alt=""
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Angelina Jolie</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">Ok, see you at the subway in a bit.</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">Just now</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/97.jpg"
						alt=""
					/>
					<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
						<div className="bg-green-500 rounded-full w-3 h-3"></div>
					</div>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p className="font-bold">Tony Stark</p>
					<div className="flex items-center text-sm font-bold">
						<div className="min-w-0">
							<p className="truncate">Hey, Are you there?</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">10min</p>
					</div>
				</div>
				<div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
			</div>
			<div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/women/33.jpg"
						alt=""
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Scarlett Johansson</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">You sent a photo.</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">1h</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/12.jpg"
						alt=""
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>John Snow</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">You missed a call John.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">4h</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/women/23.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Emma Watson</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">You sent a video.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">11 Feb</p>
					</div>
				</div>
				<div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
					<img className="rounded-full w-full h-full object-cover" alt="user2"
						src="https://randomuser.me/api/portraits/women/23.jpg" />
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/women/87.jpg"
						alt="User2"
					/>
					<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
						<div className="bg-green-500 rounded-full w-3 h-3"></div>
					</div>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Sunny Leone</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">Ah, it was an awesome one night stand.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">1 Feb</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/45.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Bruce Lee</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">You are a great human being.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">23 Jan</p>
					</div>
				</div>
				<div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
					<img className="rounded-full w-full h-full object-cover" alt="user2"
						src="https://randomuser.me/api/portraits/men/45.jpg" />
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-10 h-10 object-cover absolute ml-6"
						src="https://randomuser.me/api/portraits/men/22.jpg"
						alt="User2"
					/>
					<img className="shadow-md rounded-full w-10 h-10 object-cover absolute mt-6"
						src="https://randomuser.me/api/portraits/men/55.jpg"
						alt="User2"
					/>
					<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
						<div className="bg-green-500 rounded-full w-3 h-3"></div>
					</div>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>TailwindCSS Group</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">Adam: Hurray, Version 2 is out now!!.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">23 Jan</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/34.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Will Smith</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">WTF dude!! absofuckingloutely.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">13 Dec</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/22.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Brad Pitt</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">you called Brad.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">31 Dec</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/99.jpg"
						alt="User2"
					/>
					<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
						<div className="bg-green-500 rounded-full w-3 h-3"></div>
					</div>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Tom Hanks</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">Tom called you.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">31 Dec</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/41.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Dwayne Johnson</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">How can i forget about that man!.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">12 Nov</p>
					</div>
				</div>
				<div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
					<img className="rounded-full w-full h-full object-cover" alt="user2"
						src="https://randomuser.me/api/portraits/men/41.jpg" />
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/70.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Johnny Depp</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">Alright! let's catchup tomorrow!.
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">4 Nov</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/20.jpg"
						alt="User2"
					/>
					<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
						<div className="bg-green-500 rounded-full w-3 h-3"></div>
					</div>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Leonardo Dicaprio</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">How can you leave Rose dude. I hate you!
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">26 Oct</p>
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
				<div className="w-16 h-16 relative flex flex-shrink-0">
					<img className="shadow-md rounded-full w-full h-full object-cover"
						src="https://randomuser.me/api/portraits/men/32.jpg"
						alt="User2"
					/>
				</div>
				<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
					<p>Tom Cruise</p>
					<div className="flex items-center text-sm text-gray-600">
						<div className="min-w-0">
							<p className="truncate">Happy birthday to you my friend!
							</p>
						</div>
						<p className="ml-2 whitespace-no-wrap">2 Oct</p>
					</div>
				</div>
				<div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
					<img className="rounded-full w-full h-full object-cover" alt="user2"
						src="https://randomuser.me/api/portraits/men/32.jpg" />
				</div>
			</div>
		</div>
	</>);
}

export default ListConversations;