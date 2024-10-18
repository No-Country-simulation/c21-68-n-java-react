import {createBrowserRouter} from 'react-router-dom'
import HomeView from '../../features/home/view/HomeView';
import LoginView from '../../features/login/view/LoginView';
import PacienteView from '../../features/paciente/view/PacienteView';
import MedicoView from '../../features/medico/view/MedicoView';
import VideollamadaView from '../../features/videollamada/view/VideollamadaView';
import AgendarCita from '../../features/agendarCita/view/AgendarCita';
import Ayuda from '../../features/ayuda/view/Ayuda';
import Especialidades from '../../features/especialidades/view/Especialidades';
import Precios from '../../features/precios/view/Precios';
import Registrarse from '../../features/registrarse/view/Registrarse';
import Servicios from '../../features/servicios/view/Servicios';
import Admin from '../../features/administrador/view/Admin';

export const AppRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomeView/>,
    },
    {
        path: '/login',
        element: <LoginView/>,
    },
    {
        path: '/paciente',
        element: <PacienteView/>,
    },
    {
        path: '/medico',
        element: <MedicoView/>,
    },
    {
        path: '/agendar_cita',
        element: <AgendarCita/>,
    },
    {
        path: '/Precios',
        element: <Precios/>,
    },
    {
        path: '/ayuda',
        element: <Ayuda/>,
    },
    {
        path: '/especialidades',
        element: <Especialidades/>,
    },
    {
        path: '/registrarse',
        element: <Registrarse/>,
    },
    {
        path: '/servicios',
        element: <Servicios/>,
    },
    {
        path: '/videollamada',
        element: <VideollamadaView/>,
    },
    {
        path: '/admin',
        element: <Admin/>,
    },
]);