import sys
import json

def seconds_to_time(secs):
  secs = int(secs)
  seconds = secs % 60
  minutes = secs / 60 % 60
  hours = secs / 3600
  return  "%02d:%02d:%02d" % (hours, minutes, seconds) 

messages = []
i = 0
for line in sys.stdin:
  # Should skip or not? Check that third word is ':'
  if line.split()[2] != ':':
    continue
    
  message = {
    'message_key': i,
    'username': line.split()[1],
    'time': seconds_to_time(line.split()[0]),
    'message': ' '.join(line.split()[3:])
  }

  messages.append(message)
  i += 1
  
json_str = json.dumps(messages);
print json_str
