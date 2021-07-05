//1. Доработать модуль корзины.
//a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
//b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
//'use strict';

//Конструктор Товара
function item(a, b, c, d) {
    this.id_product = a; //this обязателен!!!
    this.product_name = b;
    this.price = c;
    this.quantity = d;
}

const catalog = {
    catalogBlock: null,
    items: [], //Список товаров в каталоге
    basket: null,


    buyItem: function (e) {
        if (e.target.className == 'item-button') {
            const id = Number(e.target.getAttribute('data-id'));
            const choice = this.items[id];
            //alert(choice.product_name);
            this.decreaseItem(id);
            basket.pushItem(new item(choice.id_product, choice.product_name, choice.price, 1));
            basket.render();
            this.render();
        }
    },

    decreaseItem(id) {
        this.items[id].quantity -= 1;
    },

    init(basket) {
        this.basket = basket;
        this.catalogBlock = document.querySelector('.catalog');
        this.setInitialCatalog();
        // событие - добавление объекта в корзину
        this.catalogBlock.addEventListener('click', this.buyItem.bind(this));
    },
    addToBasket(item) {
        this.basket.pushItem(item);
    },
    pushItem(item) {
        this.items.push(item);
    },
    //Заполняем для демо
    setInitialCatalog() {
        //alert('ini')
        this.items = [];
        this.pushItem(new item(1000, 'Ноутбук', 88000, 2));
        this.pushItem(new item(1100, 'Мышь', 700, 25));
        this.pushItem(new item(1200, 'Клавиатура', 1300, 14));
        this.render();
    },
    render() {
        this.catalogBlock.textContent = ''
        if (this.items.length) {
            this.items.forEach((item, i) => {
                this.catalogBlock.insertAdjacentHTML('beforeend', this.show(item, i));
            });
        }
    },
    show(item, id) {
        return `<div class="goodс" id="item-${id}">
                    <div><b>Наименование</b>: ${item.product_name}</div>
                    <div><b>Цена за шт.</b>: ${item.price}</div>
                    <div><b>Количество</b>: ${item.quantity}</div>
                    <div><b>Стоимость</b>: ${item.quantity * item.price}</div>
                    <div><button class="item-button" data-id="${id}">Купить</button></div>
                </div>`;
    }

}


//
const basket = {

    cartListBlock: null,
    cartButton: null,

    items: [], //Список товаров

    show(item) {
        return `<div class="good">
                    <div><b>Наименование</b>: ${item.product_name}</div>
                    <div><b>Цена за шт.</b>: ${item.price}</div>
                    <div><b>Количество</b>: ${item.quantity}</div>
                    <div><b>Стоимость</b>: ${item.quantity * item.price}</div>
                </div>`;
    },

    pushItem(item) {
        this.items.push(item);
    },
    setInitialBasket() {
        this.clearBasket()
    },

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');
        this.cartButton.addEventListener('click', this.clearBasket.bind(this));
        this.cartButton.addEventListener('click', catalog.setInitialCatalog.bind(catalog)); //Так мы можем достучаться до родительского объекта.
        this.setInitialBasket();
        this.render();
    },

    countBasketPrice() {
        let total_price = 0
        for (const val of this.items) { total_price += val.price * val.quantity };
        return total_price;
    },

    clearBasket() {
        this.items = [];
        this.render();
        //this.parentObj.render(); ТАК НЕ РАБОТАЕТ
    },

    render() {
        this.cartListBlock.textContent = '';
        if (this.items.length) {
            this.items.forEach(item => {
                this.cartListBlock.insertAdjacentHTML('beforeend', this.show(item));
            });
            this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.items.length} позиций(я) стоимостью ${this.countBasketPrice()}`);
        } else {
            this.cartListBlock.textContent = 'Корзина пуста';
        }
    }
}

basket.init()
catalog.init(basket);