// ---------- Component composition + useCallback partner component ----------
// React.memo makes this component skip re-rendering if its props haven't
// actually changed. This only works well if the "onMarkRead" function prop
// stays the SAME between renders - which is exactly what useCallback (used
// in Notifications.jsx) is for.

import { memo } from "react";
import StatusBadge from "./StatusBadge.jsx";

function NotificationItem({ notification, onMarkRead }) {
  return (
    <div className="card" style={{ marginBottom: "0.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3>{notification.title}</h3>
        <StatusBadge status={notification.read ? "available" : "critical"} />
      </div>
      <p>{notification.message}</p>
      <p style={{ fontSize: "0.8rem", color: "#666" }}>{notification.date}</p>

      {/* Conditional rendering: only show the button if it's still unread */}
      {!notification.read && (
        <button className="btn" onClick={() => onMarkRead(notification.id)}>
          Mark as read
        </button>
      )}
    </div>
  );
}

// memo() wraps the component so React can skip needless re-renders.
export default memo(NotificationItem);