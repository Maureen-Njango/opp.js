

#Write a Python program to get a list, sorted in increasing order by the last element in each tuple from a given list of non-empty tuples.

  
 def last(n):
    return n[-1]

# Define a function called 'sort_list_last' that takes a list of tuples 'tuples' as input
def sort_list_last(tuples):
    # Sort the list of tuples 'tuples' using the 'last' function as the key for sorting
    return sorted(tuples, key=last)

# Call the 'sort_list_last' function with a list of tuples as input and print the sorted result
print(sort_list_last([(2, 5), (1, 2), (4, 4), (2, 3), (2, 1)]))
