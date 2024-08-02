a = lambda x, y : x*y
print(a(7, 19))

try:
  10/0
except Exception as e:
  print(e)

def fun(*kwargs):
  print("Welcome To GFG", kwargs)

fun(1, 2, 3)