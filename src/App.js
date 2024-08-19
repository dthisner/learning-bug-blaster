import { useReducer } from "react";

import TicketForm from "./Components/TicketForm";
import TicketList from "./Components/TicketList";

import ticketReducer from "./Reducer/ticketReducer";

import tickets from "./data/tickets";
import { sortTickets } from "./uttilities/sortingUtilities";

import "./App.css";
import "./styles.css";

function App() {
  const initialState = {
    tickets: tickets,
    editingTicket: null,
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, initialState);
  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug BLaster</h1>

        <select
          value={state.sortPreference}
          onChange={(e) =>
            dispatch({ type: "SET_SORTING", payload: e.target.value })
          }
        >
          <option value="High to Low">High to Low</option>
          <option value="Low to High">Low to High</option>
        </select>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <TicketList tickets={sortedTickets} dispatch={dispatch} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
