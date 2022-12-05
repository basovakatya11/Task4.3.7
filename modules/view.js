export class View{
    constructor() {
        this.app = document.getElementById('app');

        this.select = this.createElement('div', 'select');
        this.select_input = this.createElement('input', 'select__input');
        this.select_input.setAttribute('type', 'text');
        this.select_input.setAttribute('name', 'search-value');
        this.select_body = this.createElement('div', 'select__body');

        this.select.append(this.select_input);
        this.select.append(this.select_body);

        this.reposList = this.createElement('div', 'reposList');

        this.app.append(this.select);
        this.app.append(this.reposList);



    }

    createElement(elementTag, elementClass) {
        const elem = document.createElement(elementTag);
        if (elementClass) {
            elem.classList.add(elementClass);
        }
        return elem;
    }

    createSelectItem(repoData) {
        const selectElement = this.createElement('div', 'select__item');
        selectElement.addEventListener('click', (e) => {
            this.createRepoCard(repoData);
            const select = e.target.closest('.select'),
            selectInput = select.querySelector('.select__input');
            selectInput.value = '';
            select.classList.remove('is-active');
        });
        selectElement.textContent = repoData.name;
        this.select_body.append(selectElement);
    }

    createRepoCard(repoData){
        const repoEl = this.createElement('div', 'reposList__item');
        const repoList = this.createElement('ul', 'item__characters');
        repoList.innerHTML = `<li>Name: ${repoData.name}</li>
                                    <li>Owner: ${repoData.owner.login}</li>
                                    <li>Stars: ${repoData.stargazers_count}</li>`
        const btn = this.createElement('button', 'item__btn');
        btn.innerHTML = `&times;`
        btn.addEventListener('click', function () {this.closest('.reposList__item').remove()})
        repoEl.append(repoList);
        repoEl.append(btn);
        this.reposList.append(repoEl);
    }

    
}
