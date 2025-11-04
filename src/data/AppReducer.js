export default function AppReducer(state, action) {
  switch (action.type) {
    case "delete":
      return state.filter((p) => p.id !== action.id);

    case "check":
      return state.map((p) =>
        p.id === action.id ? { ...p, checked: !p.checked } : p
      );

    case "rate":
      return state.map((p) => {
        if (p.id !== action.id) return p;

        // jeśli rating nie istnieje, zaczynamy od 0
        const current =
          typeof p.rating === "number" && !isNaN(p.rating) ? p.rating : 0;

        const next = current >= 10 ? 0 : current + 1;

        return { ...p, rating: next };
      });

    case "add":
      // jeśli użytkownik dodawany z Lab4 nie ma ratingu, nadaj mu 0
      return [...state, { ...action.item, rating: action.item.rating ?? 0 }];

    case "edit":
      return state.map((p) =>
        p.id === action.item.id ? { ...p, ...action.item } : p
      );

    default:
      return state;
  }
}
