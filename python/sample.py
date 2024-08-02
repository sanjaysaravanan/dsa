class GeeksClass:
  def function(self):
    print("function()")

import m
def monkey_function(self):
  print("monkey_function()")
 
m.GeeksClass.function = monkey_function
obj = m.GeeksClass()
obj.function()