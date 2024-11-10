import { useState } from 'react'

function SideBar() {

	const [searchInput, setSearchInput] = useState("");

	const countries = [
		{ name: "Angelina Jolie", lastMsg: "Ok, see you at the subway...", profilePic: "https://randomuser.me/api/portraits/women/33.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Tony Stark", lastMsg: "Hey, Are you there?", profilePic: "https://randomuser.me/api/portraits/men/32.jpg", lastSeen: "10 min", msgSeen: false, isOnline: false },
		{ name: "Scarlett Johansson", lastMsg: "You sent a photo.", profilePic: "https://randomuser.me/api/portraits/women/32.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "John Snow", lastMsg: "You missed a call John", profilePic: "https://randomuser.me/api/portraits/men/31.jpg", lastSeen: "10 min", msgSeen: true, isOnline: true },
		{ name: "Emma Watson", lastMsg: "You sent a video.", profilePic: "https://randomuser.me/api/portraits/women/31.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Sunny Leone", lastMsg: "Ah, it was an awesome one ni...", profilePic: "https://randomuser.me/api/portraits/women/30.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Bruce Lee", lastMsg: "You are a great human bein", profilePic: "https://randomuser.me/api/portraits/men/30.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "TailwindCSS Group", lastMsg: "Adam: Hurray, Version 2 is out ", profilePic: "https://randomuser.me/api/portraits/men/29.jpg", lastSeen: "10 min", msgSeen: true, isOnline: true },
		{ name: "Will Smith", lastMsg: "WTF dude!! absofuckingloutel", profilePic: "https://randomuser.me/api/portraits/men/28.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Brad Pitt", lastMsg: "you called Brad.", profilePic: "https://randomuser.me/api/portraits/men/27.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Tom Hanks", lastMsg: "Tom called you.", profilePic: "https://randomuser.me/api/portraits/men/26.jpg", lastSeen: "10 min", msgSeen: true, isOnline: true },
		{ name: "Dwayne Johnson", lastMsg: "How can i forget about that ", profilePic: "https://randomuser.me/api/portraits/men/25.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Johnny Depp", lastMsg: "Alright! let's catchup tomorrow...", profilePic: "https://randomuser.me/api/portraits/men/24.jpg", lastSeen: "10 min", msgSeen: true, isOnline: true },
		{ name: "Leonardo Dicaprio", lastMsg: "How can you leave Rose dude.", profilePic: "https://randomuser.me/api/portraits/men/23.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
		{ name: "Tom Cruise", lastMsg: "Happy birthday to you my fr", profilePic: "https://randomuser.me/api/portraits/men/22.jpg", lastSeen: "10 min", msgSeen: true, isOnline: false },
	]

	const handleChange = (e: any) => {
		e.preventDefault();
		setSearchInput(e.target.value);
	};

	const filteredData = countries.filter((item) => {
		if (item.name === '') {
			return item;
		} else {
			return item.name.toLowerCase().includes(searchInput.toLowerCase())
		};
	})

	return (<>
		<div className="search-box p-4 flex-none">
			<form>
				<div className="relative">
					<label>
						<input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
							type="text" value={searchInput} placeholder="Search Messenger" onChange={handleChange} />
						<span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
							<svg viewBox="0 0 24 24" className="w-6 h-6">
								<path fill="#bbb"
									d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
							</svg>
						</span>
					</label>
				</div>
			</form>
		</div>
		{/* <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
								<div className="text-sm text-center mr-4">
									<button className="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20 btn btn-circle"
										type="button">
										<svg className="w-full h-full fill-current" viewBox="0 0 24 24">
											<path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
										</svg>
									</button>
									<p>Your Story</p>
								</div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/women/12.jpg"
										alt=""
									/>
								</div></div><p>Anna</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/men/75.jpg"
										alt=""
									/>
									<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
										<div className="bg-green-500 rounded-full w-3 h-3"></div>
									</div>
								</div></div><p>Jeff</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/women/42.jpg"
										alt=""
									/>
								</div></div><p>Cathy</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/women/87.jpg"
										alt=""
									/>
									<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
										<div className="bg-green-500 rounded-full w-3 h-3"></div>
									</div>
								</div></div><p>Madona</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/women/23.jpg"
										alt=""
									/>
									<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
										<div className="bg-green-500 rounded-full w-3 h-3"></div>
									</div>
								</div></div><p>Emma</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/men/65.jpg"
										alt=""
									/>
								</div></div><p>Mark</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/women/65.jpg"
										alt=""
									/>
								</div></div><p>Eva</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/men/31.jpg"
										alt=""
									/>
									<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
										<div className="bg-green-500 rounded-full w-3 h-3"></div>
									</div>
								</div></div><p>Max</p></div>
								<div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
									<img className="shadow-md rounded-full w-full h-full object-cover"
										src="https://randomuser.me/api/portraits/men/81.jpg"
										alt=""
									/>
								</div></div><p>Adam</p></div>
							</div> */}
		<div className="contacts p-2 flex-1 overflow-y-scroll">

			{filteredData.map((item: any) => (
				<>
					<div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative cursor-pointer">
						<div className="w-16 h-16 relative flex flex-shrink-0">
							<img className="shadow-md rounded-full w-full h-full object-cover"
								src={item.profilePic}
								alt=""
							/>
							{item.isOnline ?
								<div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
									<div className="bg-green-500 rounded-full w-3 h-3"></div>
								</div>
								: null}
						</div>
						<div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
							<p>{item.name}</p>
							<div className="flex items-center text-sm text-gray-600">
								<div className="min-w-0">
									<p className="truncate">{item.lastMsg}</p>
								</div>
								<p className="ml-2 whitespace-no-wrap">{item.lastSeen}</p>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	</>);
}

export default SideBar;