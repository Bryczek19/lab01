export default function AppReducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter((p) => p.id !== action.id);

    case "check":
      return state.map((p) =>
        p.id === action.id ? { ...p, checked: !p.checked } : p
      );

    case "rate":
      return state.map((p) =>
        p.id === action.id
          ? { ...p, rating: p.rating === 10 ? 0 : p.rating + 1 }
          : p
      );

    default:
      return state;
  }
}
