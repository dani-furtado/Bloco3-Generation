import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { ReactNode, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode;

    if (usuario.token !== ""){
        component = (
            <div className="flex justify-center bg-indigo-900 text-white">

                <div className="container flex flex-col items-center py-4">

                    <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: {data}</p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>

                    <div className='flex gap-2'>

                        <a href="https://github.com/dani-furtado/" target="_blank">
                            <GithubLogo size={48} weight='bold' />
                        </a>
                        <a href="https://www.linkedin.com/in/danielefurtado" target="_blank">
                            <LinkedinLogo size={48} weight='bold' />
                        </a>

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
export default Footer;