import MessageBox from "../components/MessageBox";
import Messages from "../components/Messages";
import SideBar from "../components/Sidebar";
import ListConversations from "../components/Sidebar/ListConversations";

function Chat() {
	return (
		<>
			<div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden">
				<div className="flex-1 flex flex-col">
					<main className="flex-grow flex flex-row min-h-0">
						<section className="flex flex-col flex-none overflow-auto w-24 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
							<div className="header p-4 flex flex-row justify-between items-center flex-none">
								<p className="text-xl font-extrabold hidden md:block group-hover:block">Yuezers</p>
								<a href="#" className="block hover:bg-gray-700 bg-gray-800 w-15 p-2 hidden md:block group-hover:block btn btn-circle">
									<svg viewBox="0 0 24 24" className="w-full h-full fill-current">
										<path
											d="M6.3 12.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H7a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM8 16h2.59l9-9L17 4.41l-9 9V16zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h6a1 1 0 0 1 0 2H4v14h14v-6z" />
									</svg>
								</a>
							</div>

							<SideBar />
						</section>
						<section className="flex flex-col flex-auto border-l border-gray-800">
							<div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
								<div className="flex">
									<div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
										<img className="shadow-md rounded-full w-full h-full object-cover"
											src="https://randomuser.me/api/portraits/women/33.jpg"
											alt=""
										/>
									</div>
									<div className="text-sm">
										<p className="font-bold">Scarlett Johansson</p>
										<p>Active 1h ago</p>
									</div>
								</div>

								<div className="flex">
									<a href="#" className="flex hover:bg-gray-700 bg-gray-800 p-2 w-15 btn btn-circle">
										<svg viewBox="0 0 20 20" className="w-5 fill-current text-blue-500">
											<path d="M11.1735916,16.8264084 C7.57463481,15.3079672 4.69203285,12.4253652 3.17359164,8.82640836 L5.29408795,6.70591205 C5.68612671,6.31387329 6,5.55641359 6,5.00922203 L6,0.990777969 C6,0.45097518 5.55237094,3.33066907e-16 5.00019251,3.33066907e-16 L1.65110039,3.33066907e-16 L1.00214643,8.96910337e-16 C0.448676237,1.13735153e-15 -1.05725384e-09,0.445916468 -7.33736e-10,1.00108627 C-7.33736e-10,1.00108627 -3.44283713e-14,1.97634814 -3.44283713e-14,3 C-3.44283713e-14,12.3888407 7.61115925,20 17,20 C18.0236519,20 18.9989137,20 18.9989137,20 C19.5517984,20 20,19.5565264 20,18.9978536 L20,18.3488996 L20,14.9998075 C20,14.4476291 19.5490248,14 19.009222,14 L14.990778,14 C14.4435864,14 13.6861267,14.3138733 13.2940879,14.7059121 L11.1735916,16.8264084 Z" />
										</svg>
									</a>
									<a href="#" className="flex hover:bg-gray-700 bg-gray-800 p-2 w-15 btn btn-circle ml-4">
										<svg viewBox="0 0 20 20" className="w-5 fill-current text-blue-500">
											<path d="M0,3.99406028 C0,2.8927712 0.894513756,2 1.99406028,2 L14.0059397,2 C15.1072288,2 16,2.89451376 16,3.99406028 L16,16.0059397 C16,17.1072288 15.1054862,18 14.0059397,18 L1.99406028,18 C0.892771196,18 0,17.1054862 0,16.0059397 L0,3.99406028 Z M8,14 C10.209139,14 12,12.209139 12,10 C12,7.790861 10.209139,6 8,6 C5.790861,6 4,7.790861 4,10 C4,12.209139 5.790861,14 8,14 Z M8,12 C9.1045695,12 10,11.1045695 10,10 C10,8.8954305 9.1045695,8 8,8 C6.8954305,8 6,8.8954305 6,10 C6,11.1045695 6.8954305,12 8,12 Z M16,7 L20,3 L20,17 L16,13 L16,7 Z" />
										</svg>
									</a>
									<a href="#" className="flex hover:bg-gray-700 bg-gray-800 p-2 w-15 btn btn-circle ml-4">
										<svg viewBox="0 0 20 20" className="w-5 fill-current text-blue-500">
											<path d="M2.92893219,17.0710678 C6.83417511,20.9763107 13.1658249,20.9763107 17.0710678,17.0710678 C20.9763107,13.1658249 20.9763107,6.83417511 17.0710678,2.92893219 C13.1658249,-0.976310729 6.83417511,-0.976310729 2.92893219,2.92893219 C-0.976310729,6.83417511 -0.976310729,13.1658249 2.92893219,17.0710678 Z M9,11 L9,10.5 L9,9 L11,9 L11,15 L9,15 L9,11 Z M9,5 L11,5 L11,7 L9,7 L9,5 Z" />
										</svg>

									</a>
								</div>
							</div>

							<Messages />
							<MessageBox />
						</section>
					</main>
				</div>
			</div>
		</>
	);
}

export default Chat;