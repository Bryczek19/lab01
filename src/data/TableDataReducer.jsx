export default function TableDataReducer(state, action) {
  switch (action.type) {
    case "asc": {
      const copy = [...state];
      copy.sort((a, b) => a.user?.name.localeCompare(b.user?.name));
      return copy;
    }
    case "desc": {
      const copy = [...state];
      copy.sort((a, b) => b.user?.name.localeCompare(a.user?.name));
      return copy;
    }
    case "reset": {
      // payload = pierwotna kolejność (z wyliczonego initialData)
      return Array.isArray(action.payload) ? [...action.payload] : state;
    }
    default:
      return state;
  }
}
