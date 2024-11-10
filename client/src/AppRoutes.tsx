import { Navigate, Route, Routes } from 'react-router-dom';
import Chat from './pages/chat';



function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Chat />} />
		</Routes>
	);
}

export default AppRoutes;