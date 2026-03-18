class Animal:
    def __init__(self, name: str, age: int, color: str) -> None:
        self.name = name
        self.age = age
        self.color = color

    def speak(self) -> str:
        return "Some animal sound"

    def eat(self) -> str:
        return f"{self.name} is eating."

    def __str__(self) -> str:
        return f"Animal(name={self.name}, age={self.age}, color={self.color})"


class Dog(Animal):
    def __init__(self, name: str, age: int, color: str, breed: str) -> None:
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self) -> str:
        return f"{self.name} says: Woof!"

    def fetch(self) -> str:
        return f"{self.name} is fetching the ball."

    def __str__(self) -> str:
        return (
            f"Dog(name={self.name}, age={self.age}, "
            f"color={self.color}, breed={self.breed})"
        )


class Cat(Animal):
    def __init__(self, name: str, age: int, color: str, indoor: bool) -> None:
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self) -> str:
        return f"{self.name} says: Meow!"

    def climb(self) -> str:
        return f"{self.name} is climbing."

    def __str__(self) -> str:
        return (
            f"Cat(name={self.name}, age={self.age}, "
            f"color={self.color}, indoor={self.indoor})"
        )