import React from "react";

export default function TicketItem({ ticket, dispatch }) {
  const { id, title, description, priority } = ticket;

  const priorityClass = {
    1: "priority-low",
    2: "priority-medium",
    3: "priority-high",
  };

  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>
      <h3>{title}</h3>
      <p>{description}</p>

      <button
        onClick={() => dispatch({ type: "DELETE_TICKET", payload: { id } })}
        className="button"
      >
        Delete
      </button>

      <button
        onClick={() => {
          console.log(ticket);
          dispatch({ type: "SET_EDITING_TICKET", payload: ticket });
        }}
        className="button"
      >
        Edit
      </button>
    </div>
  );
}
