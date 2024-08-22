'''
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!

Kata Task
How many deaf rats are there?

Legend
P = The Pied Piper
O~ = Rat going left
~O = Rat going right
Example
ex1 ~O~O~O~O P has 0 deaf rats

ex2 P O~ O~ ~O O~ has 1 deaf rat

ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
'''
def count_deaf_rats(town):
    found_piper = False
    deaf_rats = 0
    expected_char = '~' 
    index=0
    while(index < len(town)):
        print(town[index])
        
        if town[index] == 'P':
            expected_char = 'O'
            index += 1 
            
        elif town[index] == ' ':
            index += 1
            
        elif town[index] == expected_char:
            index +=2
            
        else: 
            deaf_rats += 1
            index += 2
    return deaf_rats
    pass
