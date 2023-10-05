// Import necessary Vuex functions and objects
import { createStore } from 'vuex';


function updateLocalStorage(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

export const todoStore = createStore({
  state: {
    // Your state properties go here
    items: JSON.parse(localStorage.getItem("items")) || [],
  },
  mutations: {
    // Your mutations go here
    addItem: (state,data)=>{
      state.items.push(data);
      updateLocalStorage(state.items);
    },
    updateItem: (state, data) => {
      const index = state.items.findIndex((item) => item.id === data.id);
      state.items[index].completed = data.completed;
      state.items[index].title = data.title;
      updateLocalStorage(state.items);
    },
    deleteItem:(state,index)=>{
      state.items.splice(index,1);
      updateLocalStorage(state.items);
    }
  },
  actions: {
    // Your actions go here
  },
  getters: {
    // Your getters go here
  },
});
