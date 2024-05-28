import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {

    const navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        ToastAlerta('O usuário foi desconectado com sucesso!', "info")
        navigate('/')
    }

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <div className='w-full flex justify-center py-4 bg-indigo-900 text-white'>
                <div className="container flex justify-between text-lg">

                    <Link to='/home' className='text-2xl font-bold'>Blog Pessoal</Link>

                    <div className='flex gap-4'>

                        <Link to='/home' className='hover:underline'>Home</Link>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastroTema' className='hover:underline'>Cadastrar tema</Link>
                        <Link to='/login' className='hover:underline'>Login</Link>                                   
                        <div className='hover:underline'>Perfil</div>
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    );
}
export default Navbar;