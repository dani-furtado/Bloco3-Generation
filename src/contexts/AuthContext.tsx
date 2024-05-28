import { ReactNode, createContext, useState } from "react";
import { login } from "../services/Service";
import UsuarioLogin from "../models/UsuarioLogin";
import { ToastAlerta } from "../utils/ToastAlerta";

interface AuthContextProps {
    usuario: UsuarioLogin; //guarda todos os dados dos usuários
    handleLogout(): void; //para o usuário sair da aplicação
    handleLogin(usuario: UsuarioLogin): Promise<void>; //fazer o login
    isLoading: boolean; //animações de botões
}

interface AuthProviderProps {
    children: ReactNode; //componente que é renderizado na tela
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    });

    const [isLoading, setIsLoading] = useState(false); //vai carregar a animação na tela

    async function handleLogin(userLogin: UsuarioLogin) {

        setIsLoading(true);

        try {

            await login(`/usuarios/logar`, userLogin, setUsuario);
            ToastAlerta("Usuário autenticado com sucesso!", "sucesso");
            setIsLoading(false);

        } catch(error){

            ToastAlerta("Dados do Usuário inconsistentes!", "erro");
            setIsLoading(false);

        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: '',
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading}}>
            {children}
        </AuthContext.Provider>
    )
}