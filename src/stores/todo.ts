import { defineStore } from "pinia";

// Model
import type { ICategory } from "@/models/category";
import type { ITask } from "@/models/task";

export const todoStore = defineStore("todoStore", {
  state: () => ({
    categories: [] as ICategory[],
    tasks: [] as ITask[],
    categoryId: 1,
    taskId: 1,
  }),

  getters: {
    // Return Categories
    getCategories(state) {
      return state.categories;
    },

    getTasks(state) {
      return state.tasks;
    },
  },
  actions: {
    // Generate Tasks in categorie
    generateAll(categoryNumber: number, taskNumber: number) {
      this.categories = [];
      this.tasks = [];
      if (categoryNumber > 0 && taskNumber > 0) {
        for (let i = 0; i < categoryNumber; i++) {
          this.categories.push({
            id: this.categoryId++,
            title: "Title"+this.categoryId++,
          });
        }
        this.categoryId = 1;
        this.categories.forEach((category) => {
          for (let x = 0; x < taskNumber; x++) {
            // let date = new Date("");
            this.tasks.push({
              id: this.taskId++,
              content: "Task"+this.taskId++,
              date: "2022-03-15",
              categoryId: category.id,
              state: "Todo",
            });
          }
        });

        // console.log(this.categories);
      } else {
        return console.error("Cannot generate grid");
      }
    },

    // Category
    // Add
    addCategory(title: string): void {
      const category = this.findCategoryByTitle(title);
      if (category) {
        this.categories.push({ id: this.categoryId++, title: title });
      } else {
        return console.error("Category name already exist");
      }
    },

    // Edit
    editCategory(id: number, title: string) {
      if (!id || !title) {
        return;
      }

      const index = this.findCategoryIndexById(id);

      if (index >= 0) {
        this.categories[index].title = title;
      } else {
        return console.error("Cannot update this category");
      }
    },

    // Remove
    removeCategory(id: number) {
      const index = this.findCategoryIndexById(id);
      if (index !== -1) {
        this.categories.splice(index, 1);
      } else {
        return console.error("Cannot delete this category");
      }
    },

    findCategoryById(id: number) {
      return this.categories.filter((category) => category.id == id);
    },

    findCategoryIndexById(id: number) {
      return this.categories.findIndex((category) => category.id == id);
    },

    findCategoryByTitle(title: string) {
      return this.categories.filter((category) => category.title == title);
    },


    //Task
    // Add
    addTask(categoryId: number, content: string, date: string): void {
      if (!categoryId || !content || !date) {
        return;
      }
      // const categoryIndex = this.findCategoryIndexById(categoryId);
      try {
        this.tasks.push({
          id: this.taskId++,
          content: content,
          date: date,
          categoryId: categoryId,
          state: "Todo",
        });
      } catch (error) {
        return console.error("Cannot add task");
      }
    },


    // Edit
    editTask(id: number, content: string, date: string, state: string) {
      if (!id || !content || !date || !state) {
        return;
      }

      try {
        const task =  this.getTaskById(id);
       
        if (task) {
          task[0].content = content;
          task[0].date = date;
          task[0].state = state;
        } else {
          console.error("Cannot find task")
        }
      } catch (error) {
        return console.error("Cannot edit task");
      }
    },

    // Remove Task
    removeTask(id: number) {
      // const currentTask = this.findTaskInCategorByIds(categoryId, id);
      // const categoryIndex = this.findCategoryIndexById(categoryId);

      if (id) {
        const taskIndex = this.findTaskIndexById(id);
  
        if (taskIndex != -1) {
          this.tasks.splice(taskIndex, 1);
        }
      } else {
        return console.error("Category not found");
      }
    },

    getTaskById(id: number) {
      return this.tasks.filter(task => task.id == id);
    },

    getTasksByCategoryId(categoryId: number) {
      if(!categoryId) {
        return;
      }

      let tasks = [] as any;

      this.tasks.filter(task => {
        if(task.categoryId == categoryId) {
          tasks.push(task);

        };
      })
      
      return tasks.sort(function(a:any, b:any){
        return b.state.localeCompare(a.state) ||
        Number(new Date(b.date)) - Number(new Date(a.date));
      })
      
    },

    findTaskIndexById(id: number): any {
      return this.tasks.map(task => {
          return task.id;
      }).indexOf(id);
    },
  },
});
