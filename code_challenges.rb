# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words 
# that contain that particular letter.
# Method: words_finder
# Input: 1. An array of words-->array, e.g.beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
#        2. A letter-->letter, will get sub_array with this letter, e.g. letter_o = 'o'
# Output: sub_array
# Solution: step 1: get string from array 2: string.include?"letter"-->true-->push that string to sub_array 3: p sub_array

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# solution 1, without select
def words_finder1(array, letter)
    sub_array = []
    array.each do |value|
        if value.include?(letter)
            # << method used to add the value to the end of this array
            sub_array << value
        end
    end
    p sub_array
end
words_finder1(beverages_array, letter_o)
words_finder1(beverages_array, letter_t)
# Output: 
# ["coffee", "soda water"]
# ["tea", "water", "soda water"]

# solution 2, with select
def words_finder2(array,letter)
    sub_array = array.select{|value|value.include?(letter)}
    p sub_array
end
words_finder2(beverages_array, letter_o)
words_finder2(beverages_array, letter_t)
# Output:
# ["coffee", "soda water"]
# ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. 
# Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete
# Method: vowels_remover
# Input: str
# Output: new_str
# Solution: vowels letters: aeiou
album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# solution 1: without str.delete('aeiou')
def vowels_remover1(str)
    # loop string and if statement
    i = 0
    new_str = []
    while i < str.length
        if(str[i] != 'a' and str[i] != 'e' and str[i] != 'i' and str[i] != 'o' and str[i] != 'u' )
            # push the letter, not i
            new_str.push(str[i]) 
        end
        i += 1
    end
    p new_str.join
end
vowels_remover1(album1)
vowels_remover1(album2)
vowels_remover1(album3)
# Output:
# "Rbbr Sl"
# "Sgt Pppr"
# "Abby Rd"

# solution 2: with str.delete('aeiou')
def vowels_remover2(str)
    p str.delete('aeiou')   
end
vowels_remover2(album1)
vowels_remover2(album2)
vowels_remover2(album3)
# Output:
# "Rbbr Sl"
# "Sgt Pppr"
# "Abby Rd"

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. 
# The default number of wheels is 2. The current_speed should start at 0. 
# Create a get_info method that returns a sentence with all the data from the bike object.
# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'
# Class: Bike
# Initialize: model, wheels, current_speed = 0
# Get method: get_info-->e.g. 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed, :pedal, :brake
    # Create in initialize method/set up the current_speed start at 0
    def initialize(model, wheels, current_speed, pedal, brake)
        @model = model
        @wheels = wheels
        @current_speed = 0
        @pedal = pedal
        @brake = brake
    end
    # Create a get_info method-->return info
    def get_info
         p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(pedal)
        @current_speed += pedal
    end

    def brake(brake)
        if(@current_speed - brake <= 0)
            @current_speed = 0
        elsif @current_speed -= brake
        end
    end
end
trek_bike =  Bike.new("Trek", 2, 0, 0, 0)
trek_bike.get_info
# Output:
# "The Trek bike has 2 wheels and is going 0 mph."

# -------------------3b) Add the ability to pedal faster and brake. 
# Need initialie two new arguments: 1. pedal 2. brake
# The pedal_faster method should increase the speed. -->pedal_faster method-->current_speed += pedal
# The brake method should decrease the speed. -->brake method-->current_speed -= brake
# The bike cannot go negative speeds.-->setup conditional in brake method
# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0
my_bike = Bike.new("My", 2, 0 , 0, 0)
my_bike.pedal_faster(10)
my_bike.get_info
# Output: "The My bike has 2 wheels and is going 10 mph."
my_bike.brake(15)
my_bike.get_info
# Output: "The My bike has 2 wheels and is going 0 mph."