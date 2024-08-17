import { useReducer } from "react";

import TicketForm from "./Components/TicketForm";
import TicketList from "./Components/TicketList";

import ticketReducer from "./Reducer/ticketReducer";

import "./App.css";
import "./styles.css";

function App() {
  const initialState = { tickets: [], editingTicket: null };

  const [state, dispatch] = useReducer(ticketReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug BLaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={state.tickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
