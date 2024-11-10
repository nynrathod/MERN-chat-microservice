import { Route, Routes } from 'react-router-dom';
import Chat from './pages/chat';
import Auth from './pages/Auth';


function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Chat />} />
			<Route path="/auth" element={<Auth />} />
		</Routes>
	);
}

export default AppRoutes;