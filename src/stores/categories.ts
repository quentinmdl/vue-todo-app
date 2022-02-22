import { defineStore } from 'pinia'

// Model 
import type { ICategory } from '@/models/category'

export const categoryStore = defineStore('categoryStore', {
  state: () => ({
    categories: Array(),
    nextId: 0,
  }),
  getters: {
    // Return Categories
    getCategories(state) {
      return state.categories;
    },
  },
  actions: {
    // Add Category
    addCategory(title: String) {
      if (!title) {
        return;
      }
      console.log("added");

      this.categories.push({category: {id:this.nextId++, title:title, tasks: []}})

      const categoriesParsed = JSON.stringify(this.categories);
      localStorage.setItem("todos", categoriesParsed);

      
    },

    // Edit Category
    editCategorie(id: number, category: ICategory) {
      if (!id || !category) {
        return;
      }

      const index = this.findCategoryById(id);
      let currentCategory =  this.categories.findIndex((cateogry => cateogry.id == id));  // this.categories.filter(category=> category.id == id);   
        
      if (index !== -1) {
        this.categories[index].title = category.title;
      }
    },

    // Remove Categorie
    removeCategorie(id: number) {
        let index = this.categories.findIndex(function(category){
            return category.id == id;
        })
        if (index !== -1) {
          this.categories.splice(index, 1);
        }
    },


    findCategoryById(id: number) {
      return this.categories.findIndex((category) => category.id === id);
    },
  },
})
