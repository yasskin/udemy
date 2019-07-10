# A class is like a blueprint for creating objects. An object has properties and methods(functions) associated with it. Almost everything in Python is an object

# Create class


class User:
    # Constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age

    def greeting(self):
        return f'My name is {self.name} and I am {self.age}.'

    def has_birthday(self):
        self.age += 1


# Init user object
brad = User('Brad Traversy', 'brad@gmail.com', 37)
janet = User('Janet Williams', 'janet@gmail.com', 17)

# # Edit property
# brad.age = 38

# brad.has_birthday()

# print(brad.age)

# # Call method
# print(janet.greeting())

# Customer class


class Customer(User):
    # Constructor
    def __init__(self, name, email, age):
        self.name = name
        self.email = email
        self.age = age
        self.balance = 0

    def set_balance(self, balance):
        self.balance = balance

    def greeting(self):
        return f'My name is {self.name} and I am {self.age} and I owe a balance of {self.balance}.'

 # Init customer
john = Customer('John Doe', 'john@gmail.com', 40)

john.set_balance(500)

print(john.greeting())
