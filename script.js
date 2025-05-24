let automationRunning = false;
let logs = [];
let autoCount = 0;

function startAutomation() {
  if (automationRunning) return;
    automationRunning = true;
      setStatus('Running');
        addLog('Automation started');
          addNotification('Automation started!');
            let progress = 0;
              updateProgressBar(progress);
                let interval = setInterval(() => {
                    if (!automationRunning) {
                          clearInterval(interval);
                                updateProgressBar(0);
                                      return;
                                          }
                                              progress += 10;
                                                  updateProgressBar(progress);
                                                      addLog('Progress: ' + progress + '%');
                                                          if (progress >= 100) {
                                                                setStatus('Idle');
                                                                      automationRunning = false;
                                                                            addLog('Automation finished');
                                                                                  addNotification('Automation finished!');
                                                                                        updateProgressBar(0);
                                                                                              autoCount += 1;
                                                                                                    document.getElementById('auto-count').innerText = autoCount;
                                                                                                          document.getElementById('last-status').innerText = 'Success';
                                                                                                                clearInterval(interval);
                                                                                                                    }
                                                                                                                      }, 400);
                                                                                                                      }

                                                                                                                      function stopAutomation() {
                                                                                                                        if (!automationRunning) return;
                                                                                                                          automationRunning = false;
                                                                                                                            setStatus('Idle');
                                                                                                                              addLog('Automation stopped');
                                                                                                                                addNotification('Automation stopped!');
                                                                                                                                  updateProgressBar(0);
                                                                                                                                    document.getElementById('last-status').innerText = 'Stopped';
                                                                                                                                    }

                                                                                                                                    function setStatus(status) {
                                                                                                                                      document.getElementById('automation-status').innerText = status;
                                                                                                                                      }

                                                                                                                                      function addLog(msg) {
                                                                                                                                        logs.push(msg);
                                                                                                                                          document.getElementById('live-logs').innerText = logs.slice(-4).join('\n');
                                                                                                                                          }

                                                                                                                                          function updateProgressBar(progress) {
                                                                                                                                            let bar = document.getElementById('progress-bar');
                                                                                                                                              bar.style.width = progress + '%';
                                                                                                                                              }

                                                                                                                                              function addNotification(msg) {
                                                                                                                                                const ul = document.getElementById('notifications-list');
                                                                                                                                                  const li = document.createElement('li');
                                                                                                                                                    li.innerText = msg;
                                                                                                                                                      ul.appendChild(li);
                                                                                                                                                        // Auto-scroll to latest notification
                                                                                                                                                          ul.scrollTop = ul.scrollHeight;
                                                                                                                                                          }
                                                                                                                                                          