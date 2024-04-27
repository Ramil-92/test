import pizza1 from '@assets/MainPage/Pizza1.png'
import pizza2 from '@assets/MainPage/Pizza2.png'
import pizza3 from '@assets/MainPage/Pizza3.png'
import pizza4 from '@assets/MainPage/Pizza4.png'

export const categoriesData = [
    {
        category: 'Все',
        categoryId: 0
    },
    {
        category: 'Мясные',
        categoryId: 1
    },
    {
        category: 'Вегетарианские',
        categoryId: 2
    },
    {
        category: 'Гриль',
        categoryId: 3
    },
    {
        category: 'Острые',
        categoryId: 4
    },
    {
        category: 'Закрытые',
        categoryId: 5
    },
]

export const options = [
    {
        optionId: 0,
        value: 'популярности',
    },
    {
        optionId: 1,
        value: 'цене',
    },
    {
        optionId: 2,
        value: 'алфавиту',
    },
]

export const dataCard = [
    {
        id: 0,
        categoryType: [1, 3],
        img: pizza1,
        name: 'Чизбургер-пицца',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [320, 415, 480],
        popular: 4,
        count: 0
    },
    {
        id: 1,
        categoryType: [2, 5],
        img: pizza2,
        name: 'Сырная',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [310, 405, 470],
        popular: 3,
        count: 0
    },
    {
        id: 2,
        categoryType: [1, 4],
        img: pizza3,
        name: 'Креветки по-азиатски',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [300, 395, 460],
        popular: 2,
        count: 0
    },
    {
        id: 3,
        categoryType: [3, 4],
        img: pizza4,
        name: 'Сырный цыпленок',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [290, 385, 450],
        popular: 1,
        count: 0
    },
    {
        id: 4,
        categoryType: [1, 3],
        img: pizza1,
        name: 'Чизбургер-пицца 2',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [320, 415, 480],
        popular: 4,
        count: 0
    },
    {
        id: 5,
        categoryType: [2, 5],
        img: pizza2,
        name: 'Сырная 2',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [310, 405, 470],
        popular: 3,
        count: 0
    },
    {
        id: 6,
        categoryType: [1, 4],
        img: pizza3,
        name: 'Креветки по-азиатски 2',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [300, 395, 460],
        popular: 2,
        count: 0
    },
    {
        id: 7,
        categoryType: [3, 4],
        img: pizza4,
        name: 'Сырный цыпленок 2',
        type: ['тонкое', 'традиционное'],
        size: ['26 см.', '30 см.', '40 см.'],
        price: [290, 385, 450],
        popular: 1,
        count: 0
    },
]