
'''
Given a list and an integer k, remove every kth  element from the list.
k is guaranteed to be smaller than the length of the list.

The list is very long
Do this in one pass.
'''
## My Answer ##
#create a test list here
test_list = [       # string test  #[i for i in range(11)] #integer test
    'is', 'guaranteed',
    'to', 'be',
    'smaller', 'than',
    'the', 'length',
    'of', 'the',
    'list', 'index',
    'variable', 'to',
    'keep', 'logic',
    'one','two',
    'three', 'four'
] 
    
def remove_kth_element(inputList, k):
    
    index = 0 
    
    #modify loop here
    for i in inputList:
        index += 1
        if index % k == 0:
            inputList.pop(index)
            
    #fixes element[1] remaining when indexes start at 0
    if k == 2:
        inputList.pop(1);
        
    return inputList

print(remove_kth_element(test_list,2))
