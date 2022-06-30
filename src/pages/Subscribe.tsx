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
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center bg-fixed">

            <div className="mt-8 bg-no-repeat items-center flex-col absolute animate-spin-slow -z-10">
                <LogoReact />
            </div>

            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>

                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl m-6 block">Inscreva-se gratuitamente</strong>

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
            {/* <img src="/src/assets/code-mockup.png" className="mt-10" alt="Imagem printscreen vscode" /> */}
            <VscodePrint />

            <footer className="bg-gray-900/50 w-full">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-16 mt-2 mb-2 flex justify-center">
                        <img
                            className="rounded-full border-2 border-blue-500"
                            src="https://avatars.githubusercontent.com/u/60415245?v=4"
                            alt="Avatar Dev Neillon Almeida de Oliveira"
                        />
                    </div>
                    <div>
                        <strong className="font-bold block">Neillon Almeida de Oliveira</strong>
                        <span className="text-gray-200 text-sm block">
                            Desenvolvedor Frontend Jr - <a className="text-blue-500 hover:text-green-500 transition-colors" href="https://github.com/NeillonWork">
                                https://github.com/NeillonWork
                            </a>
                        </span>
                    </div>
                </div >
            </footer >
        </div >
    );
}