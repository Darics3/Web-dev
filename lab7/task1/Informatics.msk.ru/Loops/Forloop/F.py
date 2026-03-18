x = int(input())

result = 0

for _ in range(len(str(x))):
    digit = x % 10
    result = result * 10 + digit
    x //= 10

print(result)