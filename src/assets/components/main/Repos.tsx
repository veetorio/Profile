import { useEffect, useState } from "react"
import { RequestRepo } from "../../Interfaces/Types"
import { GitHubRepositoriesDefault } from "../../Interfaces/GitGet";
import Project from "./content/Project";
import Load from "../loading/load";





function Repos() {
    const [repositorios, setRepositorios] = useState<RequestRepo[]>();

    function NotRepo(props: { newsRepos: RequestRepo[] }) {
        if (props.newsRepos.length === 0) {
            return (
                <div className="h-full w-full flex justify-center items-center">
                    <div className="flex-col text-center gap-4">
                        <Load />
                        <h1>Espere um minuto ...</h1>
                    </div>
                </div>
            )
        }
        return repositorios?.map(e => {
            return <Project url={e.description} title={e.name} desc={e.description} />
        })
    }

    const setterRepos = async () => {
        const data = await GitHubRepositoriesDefault(10);
        setRepositorios(data)
    }

    useEffect(() => {
        setTimeout(() => {
            setterRepos()
        }, 4000)
    }, [repositorios])
    return (
        <div className="w-1/2 h-96 overflow-y-auto max-[640px]:flex-col max-[640px]:m-auto  max-[640px]:w-64 ">
            {
                <NotRepo newsRepos={repositorios || []} />
            }
        </div>
    )
}

export default Repos;