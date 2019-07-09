# A List is a collection which is ordered and changeable. Allows duplicate members.

# Create list
numbers = [1, 2, 3, 4, 5]

# Create list using a constructor
numbers = list((1, 2, 3, 4, 5))
fruits = ['Apples', 'Oranges', 'Grapes', 'Pears', 12]

# print(type(numbers))
# print(numbers)

# Get value
print(fruits[1])

# Get len
print(len(fruits))

# Append to list
fruits.append('Mangos')

# Remove from list
fruits.remove('Grapes')
fruits.remove(12)
fruits.pop(3)

# Insert into position
fruits.insert(2, "Strawberries")

# Reverse list
fruits.reverse()

# Sort list
fruits.sort()

# Reverse sort list
fruits.sort(reverse=True)

print(fruits)
