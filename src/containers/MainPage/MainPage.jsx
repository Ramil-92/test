import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Tabs from '@components/MainPage/Tabs';
import Sort from '@components/MainPage/Sort';
import Card from '@components/MainPage/Card';
import { categoriesData, options } from '@data/data'

import styles from './MainPage.module.css'

const MainPage = () => {
    const storeData = useSelector(state => state.countReducer)

    const [categoryActive, setCategoryActive] = useState(0)
    const [title, setTitle] = useState(null)
    const [choosenTypeItems, setChoosenTypeItems] = useState([...storeData])
    const [sortedData, setSortedData] = useState(storeData)

    const [currentSort, setCurrentSort] = useState('популярности')
    const [activeDropdown, setActiveDropDown] = useState(false)
    const [choosenOption, setChoosetOption] = useState(0)

    useEffect(() =>{
        setTitle(categoriesData.find(categoryData => categoryData.categoryId === categoryActive).category)
    }, [categoryActive])

    const onClickChange = (categoryId) => {
        setCategoryActive(categoryId)
    }

    const onClickDropdown = (option, id) => {
        setCurrentSort(option)
        setActiveDropDown(false)
        setChoosetOption(id)
    }

    useEffect(() => {
         let data = [...sortedData]
        if (currentSort === 'популярности') {
            data.sort((a, b) => b.popular - a.popular)
        } else if (currentSort === 'цене') {
            data.sort((a, b) => a.price[0] - b.price[0])
        } else if (currentSort === 'алфавиту') {
            data.sort((a, b) => a.name.localeCompare(b.name))
        }

        let filteredData = data
        if (categoryActive !== 0) {
            filteredData = data.filter(item => item.categoryType.includes(categoryActive))
        }
        
        setChoosenTypeItems(filteredData)
    }, [categoryActive, currentSort, sortedData])

    const addToCart = (id) => {
        setSortedData(prev => {
            return prev.map(item => {
                if(item.id == id){
                    return {...item, count: item.count + 1}
                }else{
                    return item
                }
            })
        })
    }

    return (
        <div className={styles.main__wrapper}>

            <div className={styles.main__sorting}>
                <ul className={styles.tab__wrapper}>
                    {
                        categoriesData.map(({category, categoryId}) => (
                            <Tabs 
                                key={categoryId} 
                                categoryId={categoryId} 
                                category={category} 
                                categoryActive={categoryActive}
                                onClickChange={onClickChange}
                            />
                        ))
                    }
                </ul>

                <Sort 
                    options={options}
                    onClickDropdown={onClickDropdown}
                    setCurrentSort={setCurrentSort}
                    setActiveDropDown={setActiveDropDown}
                    currentSort={currentSort}
                    activeDropdown={activeDropdown}
                    choosenOption={choosenOption}
                />
            </div>

            <h1 className={styles.main__title}>{title} пиццы</h1>

            <div className={styles.card__wrapper}>
                {
                    choosenTypeItems.map(card => (
                        <Card
                            key={card.id}
                            id={card.id}
                            categoryType={card.categoryType}
                            img={card.img}
                            name={card.name}
                            type={card.type}
                            size={card.size}
                            price={card.price}
                            popular={card.popular}
                            count={card.count}
                            addToCart={addToCart}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default MainPage;