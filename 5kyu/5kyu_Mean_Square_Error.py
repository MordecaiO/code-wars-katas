'''
Complete the function thataccepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
Examples
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
'''
import math
def solution(array_a, array_b):
    sum_squared_diffs = 0
    for index in range(len(array_a)): 
        array_a_val = array_a[index]
        array_b_val = array_b[index]
        squared_diff = math.pow(abs(array_a_val - array_b_val),2)
        sum_squared_diffs += squared_diff
    return sum_squared_diffs / len(array_a)
