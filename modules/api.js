const URL = 'https://api.github.com/';
const REPOS_PER_LIST = 5;

export class Api {
    async loadRepos(value) {
        return await fetch(`${URL}search/repositories?q=${value}&per_page=${REPOS_PER_LIST}&page=1`);
    }

}