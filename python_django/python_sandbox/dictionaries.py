# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.

# Simple dictionary
person = {
    'first_name': 'John',
    'last_name': 'Doe',
    'age': 30
}

# Using a constructor
'''
person = dict(
    first_name='John',
    last_name='Doe',
    age=30
)
'''

# Access value
print(person['first_name'])
print(person.get('last_name'))

# Add key/value
person['phone'] = '555-555-5555'

# Get keys
print(person.keys())

# Get items
print(person.items())

# Make a copy
person2 = person.copy()
person2['city'] = 'Boston'


# Remove item
del(person['age'])
person.pop('phone')

# Get length
print(len(person2))

# Clear
person.clear()


# List of dict
people = [
    {'name': 'Martha', 'age': 40},
    {'name': 'Bob', 'age': 20}
]

print(people[1]['name'])
