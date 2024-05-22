import React, { useState } from 'react'

const CategoriesFilter = () => {

    const [activeCategory, setActiveCategory] = useState('*');
    const categories = [
        { key: '*', label: 'Todos' },
        { key: '.bidones', label: 'Bidones' },
        { key: '.dbasicos', label: 'Dispensadores Básicos' },
        { key: '.dpremium', label: 'Dispensadores Premium' },
        { key: '.kits', label: 'Kits Iniciales' },
        { key: '.accesorios', label: 'Accesorios' }
    ];

    return (
        <ul className="filters_menu">
            {categories.map(category => (
                <li
                    key={category.key}
                    className={activeCategory === category.key ? 'active' : ''}
                    data-filter={category.key}
                    onClick={() => setActiveCategory(category.key)}
                >
                    {category.label}
                </li>
            ))}
        </ul>
    )
}

export default CategoriesFilter;
