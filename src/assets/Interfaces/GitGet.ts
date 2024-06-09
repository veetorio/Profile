import axios from 'axios'
import { RequestRepo } from './Types'

export async function GitHubRepositoriesDefault() : Promise<RequestRepo[]> {
    return (await axios.get(`https://api.github.com/users/veetorio/repos`)).data

}
