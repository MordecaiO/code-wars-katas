'''
Your task is to create a function that given a sequence and a predicate, 
returns True if only some (but not all) the elements in the sequence are True after applying the predicate
Examples
('abcdefg&%$', x -> isLetter(x)) == true
('&%$=', x -> isLetter x) == false
('abcdefg', x -> isLetter x) == false

([4, 1], x -> x > 3) == true
([1, 1], x -> x > 3) == false
([4, 4], x -> x > 3) == false
'''

def some_but_not_all(seq, pred): 
    pred_is_valid = False
    not_all_is_valid = False
    for element in seq:
        if(pred(element)):
            pred_is_valid = True
        else:
            not_all_is_valid = True
    return pred_is_valid and not_all_is_valid == True
    pass
