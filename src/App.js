import { useReducer } from "react";

import TicketForm from "./Components/TicketForm";
import ticketReducer from "./Reducer/ticketReducer";

import "./App.css";
import "./styles.css";

function App() {
  const initialState = { tickets: [] };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug BLaster</h1>
        <TicketForm dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
