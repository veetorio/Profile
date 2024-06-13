import axios from 'axios'
import { RequestRepo } from './Types'

export async function GitHubRepositoriesDefault(num : number) : Promise<RequestRepo[]> {
    const json = async() =>{ 
        return (await axios.get(`https://api.github.com/users/veetorio/repos?per_page=${num}`)).data
    }
    
    return json();

}

