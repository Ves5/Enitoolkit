import json
from collections import Counter
import itertools

def unscramble(scrambled_letters, index):
    # Convert the scrambled letters to lowercase
    scrambled_letters = scrambled_letters.lower()
    
    # Count the frequency of each letter in the scrambled letters
    letter_counts = Counter(scrambled_letters)

    # Create a dictionary to store the unscrambled words by length
    unscrambled_words = {}

    # Loop through each possible combination of letters in the scrambled letters
    for i in range(1, len(scrambled_letters) + 1):
        for letters in itertools.combinations(scrambled_letters, i):
            # Create a Counter object for the sorted letters in the combination
            sorted_letters = ''.join(sorted(letters))
            if sorted_letters in index:
                for word in index[sorted_letters]:
                    # Create a Counter object for the sorted letters in the word
                    word_counts = Counter(word)
                    # Check if the letter counts match
                    if all(word_counts.get(letter, 0) <= letter_counts.get(letter, 0) for letter in word_counts.keys()):
                        word_length = len(word)
                        if word_length not in unscrambled_words:
                            unscrambled_words[word_length] = set()
                        unscrambled_words[word_length].add(word)

    # Sort each list of words by length
    for length in unscrambled_words.keys():
        unscrambled_words[length] = sorted(list(unscrambled_words[length]))

    # Convert the dictionary of unscrambled words to a JSON string
    json_output = json.dumps(unscrambled_words)

    # Return the JSON string
    return json_output



# Read in the dictionary file as a list of words
# with open('wwf_index.txt') as f:
#     index = json.load(f)

# # Call the unscramble function with a scrambled letters string
# scrambled_letters = 'tests'
# unscrambled_words = unscramble(scrambled_letters, index)

# # Print out the unscrambled words
# print(unscrambled_words)
