import React from 'react';
import CategoryItem from './CategoryItem';
const Category = () => {
  return (
    <section className="py-5 md:py-10">
      <div className="container flex items-center flex-wrap sm:flex-nowrap justify-evenly md:justify-between gap-2 sm:gap-5">
        <CategoryItem
          img="/images/categories/category1.png"
          title="قهوه دمی و اسپرسو"
        />
        <CategoryItem
          img="/images/categories/category2.png"
          title="لوازم جانبی و تجهیزات"
        />
        <CategoryItem
          img="/images/categories/category3.png"
          title="اسپرسو ساز"
        />
        <CategoryItem
          img="/images/categories/category4.png"
          title="پک تستر قهوه"
        />
        <CategoryItem img="/images/categories/category5.png" title="قهوه ترک" />
      </div>
    </section>
  );
};

export default Category;
