wakeUp('siesta');
// Alerts: Starting my math homework.

function wakeup(siesta, callback) {
    alert(`Starting my ${siesta} now.`);
    callback();
  }
  
  wakeUp('siesta', function() {
    alert('I\m Woke now');
  });