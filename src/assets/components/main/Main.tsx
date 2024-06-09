import Content from "./content/Content";
import Title from "./title/Title";

const text = [
    `Eu tenho um grande interesse em programação. Comecei a me envolver com isso quando ainda estava na escola,
    e desde então tenho continuado a me aprofundar nesse campo. Já se passou cerca de um ano e meio desde que comecei,
    e continuo bastante entusiasmado com tudo isso.`,

    `Minha jornada até agora tem sido uma montanha-russa de emoções. Comecei com HTML, CSS e JavaScript, depois mergulhei no C#. Hoje,
    estou focado em React e Spring, uma transição emocionante.
    É uma jornada cheia de aprendizados e desafios, mas estou amando cada minuto disso e sei que ainda tem muito mais pela frente!`,

    `Tenho um interesse significativo tanto no backend quanto no frontend.
     Acho fascinante a capacidade de criar sistemas que operam nos bastidores e também interfaces que os usuários podem ver e interagir.
     É como dar vida às minhas ideias. No entanto, meu foco principal tem sido o desenvolvimento no backend.`
];

function Main() {
    return (
        <main id="main" className="bg-slate-900 flex shadow-2xl p-5 max-[640px]:flex-col">
            <div className=" w-1/2 flex items-center justify-center max-[640px]:w-full">
                <div className="h-60 w-60 bg-[url(/vee.jfif)] bg-cover rounded-full" />
            </div>
            <div className="conteiner p-5 w-1/2 h-full max-[640px]:w-full">
                <Title title="sobre mim"/>
                <Content text={text} />
            </div>
        </main>
    );
}

export default Main;
