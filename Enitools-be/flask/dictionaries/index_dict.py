import json

def create_index(words):
    index = {}
    for word in words:
        sorted_word = ''.join(sorted(word))
        if sorted_word not in index:
            index[sorted_word] = []
        index[sorted_word].append(word)
    return index

with open("wwf.txt") as f:
    dictionary = [word.strip() for word in f.readlines()]

with open("wwf_index.txt", "w") as i:
    json.dump(create_index(dictionary), i)