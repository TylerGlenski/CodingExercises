### Will create a word list based off a string. 
# goal is to add this to a larger program

## test string ##
    txt = ''''''
    txt += '''When you have mastered the Way of strategy, you can suddenly make your body like a rock, and ten thousand things cannot touch you '''
    txt += '''Therefore the best fortress is to be found in the love of the people, for although you have fortresses, '''
    txt += '''they will not save you if you are hated by the people. - Machevelli '''
    txt += '''But afterwards they were of little use to her when Cesare Borgia attacked her '''
    txt += ''' and the people being hostile to her allied themselves with the foreigner.'''
    txt += ''' So that then and before it would have been safer for her not to have been hated by the people than to have had the fortresses.'''
    txt += '''He considered where he could get such experience. '''
    txt += '''There was the Musashi Flex, a loosely-organized band of modern ronins who travelled around challenging each other;  '''
    txt +='''he could try that. Or, there was The Maze. '''
    txt +='''Such a thing was risky, but it offered a real test. '''
    txt +='''Injury was likely, death a possibility in the game known as The Maze; '''
    txt += '''if he could survive that, maybe he would be ready.... '''

def build_word_list(input_txt):
## input txt to be replaced with input from website/app ##
    txt = input_txt
   

    #build strip_chr string
    strip_chr = '!@#$%^&*()_+-=<>'
    strip_chr+= '''.,/?'";:`~'''
    strip_chr+= '0123456789'
    strip_chr+= '|}{[]'

    #iterate through strip_chr and if it found in input_txt remove it.
    for i in strip_chr:
        if i in txt:
            txt=txt.replace(i,'')

    #formats the input text into a list of strings
    #initial list creation
    new_list = ''.join(i for i in txt).lower().split()
    
    #takes the first list and makes new list without any words > 10 letters and none < 4 letters
    #customize final list here
    word_list = [i for i in new_list if len(i) >= 4 and len(i) < 20]
    
    #return finished list
    return(word_list)

test = build_word_list(txt)
print(test)
