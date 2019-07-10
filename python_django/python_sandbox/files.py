# Python has functions for creating, reading, updating, and deleting files.

# Open a file
myFile = open('myfile.txt', 'w')

# Get info on file
print('Name: ', myFile.name)
print('Is closed: ', myFile.closed)
print('Opening mode: ', myFile.mode)

# Write to file
myFile.write('I love Python')
myFile.write(' and JavaScript.')
myFile.close()

# Append to file
myFile = open('myfile.txt', 'a')
myFile.write(' I also like PHP.')
myFile.close()

# Read from file
myFile = open('myfile.txt', 'r+')
text = myFile.read(10)
print(text)
