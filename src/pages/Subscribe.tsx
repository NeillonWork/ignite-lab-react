import { GithubLogo } from "phosphor-react";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { LogoReact } from "../components/LogoReact";
import { VscodePrint } from "../components/VscodesPrint";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center bg-fixed mx-auto">
            <div className="w-full max-w-[654px] xs:animate-none sm:animate-none md:animate-none flex flex-col fill-current items-center absolute -z-10 bg-opacity-25 animate-spin-slow">
                <LogoReact />
            </div>
            <div className="w-full max-w-[1100px] flex md:flex-col sm:flex-col xs:flex-col items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px] flex flex-col sm:text-center xs:text-center md:p-6 sm:p-6 xs:p-6">
                    <span className="flex flex-col sm:items-center xs:items-center">
                        <Logo />
                    </span>
                    <h1 className="mt-8 text-[2.5rem] leading-tight text-start sm:text-center xs:text-center xs:text-[1.9rem]">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed xs:text-[0.9rem]">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded xs:w-full xs:rounded-none md:w-full md:max-w-[640px] sm:w-full sm:max-w-[640px]">
                    <strong className="text-2xl m-6 block xs:text-left xs:text-[1.13rem] xs:ml-0">
                        Inscreva-se gratuitamente
                    </strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onChange={event => setName(event.target.value)}
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu email"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50">
                            GARANTIR MINHA VAGA
                        </button>
                    </form>
                </div>
            </div>
            <div className="w-full max-w-[1100px]  flex fill-current">
                <VscodePrint />
            </div>
            <footer className="bg-gray-900/50 w-full flex-grow opacity-70">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-16 mt-2 mb-2 flex justify-center xs:ml-10  xs:w-24">
                        <img
                            className="rounded-full border-2 border-blue-500"
                            src="https://avatars.githubusercontent.com/u/60415245?v=4"
                            alt="Avatar Dev Neillon Almeida de Oliveira"
                        />
                    </div>
                    <div className="flex flex-col items-start xs:items-start">
                        <strong className="font-bold block">Neillon Almeida de Oliveira</strong>
                        <span className="text-gray-200 text-sm block items-center text-center xs:text-start">
                            Desenvolvedor Frontend Jr - <a className="text-blue-500 hover:text-green-500 transition-colors" href="https://github.com/NeillonWork">
                                https://github.com/NeillonWork
                            </a>
                        </span>
                    </div>
                </div >
            </footer >
        </div>
    );
}