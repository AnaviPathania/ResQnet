// ---------- useState, useCallback, lists, prop drilling ----------

import { useState, useCallback } from "react";
import { notifications as initialNotifications } from "../../data/notifications.js";
import NotificationItem from "../../components/NotificationItem.jsx";

function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);

  // useCallback keeps this SAME function reference across re-renders
  // (as long as its dependency array [] doesn't change), so the memoized
  // NotificationItem children below don't re-render unnecessarily.
  const handleMarkRead = useCallback((id) => {
    setNotifications((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, read: true } : item // ES6+ spread: copy + update one field
      )
    );
  }, []);

  return (
    <div>
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        notifications.map((notification) => (
          // handleMarkRead is "prop drilled" down into NotificationItem here.
          <NotificationItem
            key={notification.id}
            notification={notification}
            onMarkRead={handleMarkRead}
          />
        ))
      )}
    </div>
  );
}

export default Notifications;