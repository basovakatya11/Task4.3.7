export class Search{
    constructor(view, api) {
        this.view = view;
        this.api = api;

        this.view.select_input.addEventListener('keyup', this.debounce(this.loadRepos.bind(this), 400));
    }

    loadRepos() {
        if (this.view.select_input.value) {
            this.clearRepos();
            this.reposRequest(this.view.select_input.value);
            this.view.select.classList.add('is-active');
            
        }else{
            this.clearRepos();
        }
    }

    async reposRequest(searchValue){
        try{
            await this.api.loadRepos(searchValue).then((res) => {
                res.json().then((res) => {
                    res.items.forEach((repo) => this.view.createSelectItem(repo));
                });
            });
        }catch(e){
            console.log('Error: ' + e);
        }
    }

    clearRepos() {
        this.view.select_body.innerHTML = '';
    }

    debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            const later = function() {
                timeout = null;
                if(!immediate) func.apply(context, args);
            }
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    }
}