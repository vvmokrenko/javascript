//2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
///2.1. Пустая корзина должна выводить строку «Корзина пуста»;
//2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

//Конструктор Товара
function item(a, b, c, d) {
    this.id_product = a; //this обязателен!!!
    this.product_name = b;
    this.price = c;
    this.quantity = d;
}

//Корзина
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
    //Заполняем для демо
    setInitialBasket() {
        this.pushItem(new item(1000, 'Ноутбук', 88000, 2));
        this.pushItem(new item(1100, 'Мышь', 700, 25));
        this.pushItem(new item(1200, 'Клавиатура', 1300, 14));
    },

    init() {
        this.cartListBlock = document.querySelector('.cart-list');
        this.cartButton = document.querySelector('.cart-btn');

        this.cartButton.addEventListener('click', this.clearBasket.bind(this));
        this.setInitialBasket();
        this.render();
    },

    countBasketPrice() {
        let total_price = 0
        for (const val of this.items) { total_price += val.price * val.quantity };
        return total_price;
    },

    clearBasket() {
        this.items = []
        this.render();
    },

    render() {
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
