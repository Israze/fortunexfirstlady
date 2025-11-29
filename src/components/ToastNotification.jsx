import React, { useState, useEffect } from 'react';
import notifications from '../../notification.json';

const ToastNotification = () => {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cycleNotifications = () => {
      // Show the toast
     setIsVisible(true);

      // Set a timeout to hide the toast after 3.5 seconds
      setTimeout(() => {
        setIsVisible(false);
        
        // After hiding, wait 0.5s for the fade-out animation to complete, 
        // then update the content for the next notification.
        setTimeout(() => {
          setCurrent(prev => (prev + 1) % notifications.length);
        }, 500);
      }, 3500);
    };

    // Start the first notification cycle immediately
    cycleNotifications();
    
    // Set an interval to run the cycle every 8 seconds.
    // This creates a 4.5-second delay between toasts (8000ms total cycle - 3500ms visible time).
    const interval = setInterval(cycleNotifications, 8000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const notification = notifications[current];

  if (!notification) {
    return null;
  }

  const isWithdrawal = notification.type === 'withdrawal';

  const baseClasses = 'fixed top-20 left-4 text-white p-4 rounded-lg shadow-lg border-l-4 transition-opacity duration-500 w-80';
  const toastClasses = isWithdrawal
    ? `bg-green-800 border-green-400 ${baseClasses}`
    : `bg-[#6e0000] border-yellow-400 ${baseClasses}`;

  return (
    <div
      className={`${toastClasses} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {isWithdrawal ? (
        <p>
          <span className="font-bold text-green-400">{notification.name}</span> from {notification.location} just withdrew{' '}
          <span className="font-bold">{notification.amount}</span>
        </p>
      ) : (
        <p>
          <span className="font-bold text-yellow-400">{notification.name}</span> from {notification.location} just subscribed to
        </p>
      )}
      {!isWithdrawal && <p className="font-bold">{notification.plan} - {notification.amount}</p>}
      <p className="text-sm text-gray-300">• {notification.time}</p>
    </div>
  );
};

export default ToastNotification;
