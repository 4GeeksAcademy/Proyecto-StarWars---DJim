export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    character: [],
    favorites:[],
    planets:[],
    ships:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };


    //////////////////////////
    case "get_characters":
      const { character } = action.payload
      return {
        ...store, personajes: character

      };
    ///////////////////////////
      case "get_planets":
      const { planets } = action.payload
      return {
        ...store, planetas: planets

      };
    ////////////////////////
case "get_ships":
      const { ships } = action.payload
      return {
        ...store, naves: ships 
      }

       case 'add_favorite': {
      const { item } = action.payload
      return {
        ...store, favorites: [...store.favorites, item]
      };
    }

    case 'remove_favorite': {
      const { index } = action.payload;
      return {
        ...store, favorites: store.favorites.filter((_, i) => i !== index)
      };
    }


    ////////////////////////
    default:
      throw Error('Unknown action.');
  }
}
