import { elements } from './base';

export const renderItem = item => {
    const markup = `
        <li class="shopping__item" data-itemid=${item.id}>
            <div class="shopping__count">
                <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
                <p>${item.unit}</p>
            </div>
            <p class="shopping__description">${item.ingredient}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};


export const showDeleteBtn = (visibility) => {
    if (visibility === 'show') {
        if (document.contains(document.getElementById("deleteList")))  {
            listView.showDeleteBtn('remove');
        }
    
        const markupBtn = `
        <button class="shopping__delete_all btn-small recipe__btn recipe__btn--add" id="deleteList">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
                Delete all
        </button>
        `;

        elements.shopping.insertAdjacentHTML('afterbegin', markupBtn);
    }
    if (visibility === 'remove') {
        elements.shopping.removeChild(document.querySelector('.shopping__delete_all'));
    }
};

export const deleteAllListBtn = item => {
    Array.from(document.getElementsByClassName('shopping__item')).forEach(element => {
        element.parentElement.removeChild(element);
    });

    showDeleteBtn('remove');

};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
