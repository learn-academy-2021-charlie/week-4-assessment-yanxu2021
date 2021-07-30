# ASSESSMENT 4: Interview Practice Questions
Answer the following questions.
First, without external resources. Challenge yourself to answer from memory.
Then, research the question to expand on your answer. 
Even if you feel you have answered the question completely on your own, there is always something more to learn. 
Write your researched answer in your OWN WORDS.  

## 1. What is an instance variable in Ruby? How is it different from other variables?
  
  Your answer: 
  
  We can tell difference with an instance variable from other variables by "@". It used to define variables locally.
  
  Researched answer:
  
  An instance variable in ruby has a name starting with @ symbol, and its content is restricted to whatever the object itself refers to. 
  Two separate objects, even though they belong to the same class, are allowed to have different values for their instance variables.
  

## 2. What is a block in Ruby?
  
  Your answer: 
  
  A block in Ruby stand for a paragraph of code which has certain function. 
  Ruby syntax use block rather than punctuation.

  Researched answer:
  
  Ruby blocks are anonymous functions that can be passed into methods. 
  Blocks are enclosed in a do-end statement or curly braces {}. 
  do-end is usually used for blocks that span through multiple lines while {} is used for single line blocks. 
  The block is passed to the each method of an array object.
  

## 3. Ruby has an implicit return. What does that mean?
  
  Your answer: 
  
  Implicit return means we don't need use key word, only simply call variables or functions by name.
  
  Researched answer:
  
  Every block in ruby will return the value of the last line automatically, 
  so it's common to not use the return keyword in favor of minimal code (especially if the method fits in one line),
  and also explicit return is misleading or cause errors sometimes, 
  it is better to let the language handle the flow of calls and not use the return keyword.
  

## 4. What is object-oriented programming? How is it different than functional programming?
  
  Your answer:
  
  OOP, object-oriented programming lean to use classes /objects to set entities used for programming, 
  classes will be the template or model, objects will be the instances specifically defined by key word new 
  and will get the actual data/behavior. 
  The big difference from functional programming is that classes come with: 
  1. abstraction 2. encapsulation 3. polymorphic 4. inheritance properties. 
  
  Researched answer:
  
  Object-oriented programming is a programming paradigm based on the concept of "objects", which can contain data and code: 
  data in the form of fields, and code, in the form of procedures. A feature of objects is that an object's own procedures can access and often modify the data fields of itself.
  FP is the process of building software by composing pure functions. All objects are immutable which means that once something is created, 
  it can’t be changed. 
  Functional programming claims that data and behavior are different things and should be kept separate for clarity.FP rests on six concepts: 1. higher-order functions (HOF);2. purity; 3. recursion; 4. referential transparency; 5. strict and lazy evaluation; 6. type systems.
  They both have Pros and Cons.
  While both object-oriented programming and functional programming are essential paradigms that share the same goal of developing understandable and bug-free programs, their approaches are different. OOP follows the imperative programming model that is based on a set of primitives the programming language provides. FP, on the other hand, is closely connected to the declarative style which implies that you only define what needs to be executed without specifying how to do that.
  It seems the general consensus is that OOP and FP are efficient in any certain situation, so it is always up to developers to choose the programming paradigm that makes the process productive and easy. 
  
## 5. What is the difference between a class and an object?
  
  Your answer: 
  
  A class is the template or model used to set up general properties(data and behaviors) of things.
  An object compare with the class will be the detailed instance(entities) or specific thing.
  
  Researched answer:
  
  A class is a template that describes the variables and the methods that define a set of objects. An object is an instance of a class.
  
## 6. STRETCH: What is `attr_accessor`?

  Your answer: 'attr_accessor' used as get method allows us to use data and method outside of the class. --->not only get, and also can set
  
  Researched answer:
  
  In Ruby, attr_accessor automatically sets up getters and setters for instance variables. Using attr_accessor allows us to set and get values from outside of the class.
  
# Looking Ahead: Terms for Next Week

## 1. PostgreSQL:

  PostgreSQL, also known as Postgres, is a free and open-source relational database management system emphasizing extensibility and SQL compliance. It was originally named POSTGRES, referring to its origins as a successor to the Ingres database developed at the University of California, Berkeley.

## 2. Ruby on Rails:

  Ruby on Rails, or Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.

## 3. CRUD:

  CRUD is an acronym that comes from the world of computer programming and refers to the four functions that are considered necessary to implement a persistent storage application: create, read, update and delete.

## 4. ORM:

  Object–relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

## 5. Active Record:

  Active Record is the M in MVC - the model - which is the layer of the system responsible for representing business data and logic. Active Record facilitates the creation and use of business objects whose data requires persistent storage to a database.
