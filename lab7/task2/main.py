from models import Animal, Dog, Cat


def main() -> None:
    animal = Animal("Generic", 5, "gray")
    dog = Dog("Rex", 3, "brown", "Labrador")
    cat = Cat("Mimi", 2, "white", True)

    animals = [animal, dog, cat]

    for item in animals:
        print(item)
        print(item.speak())
        print(item.eat())
        print("-" * 30)

    print(dog.fetch())
    print(cat.climb())


if __name__ == "__main__":
    main()