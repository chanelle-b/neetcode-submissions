class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        #declare a map
        map = {}

        #loop through each word
        for word in strs:
            #create a counter for each letter in the alphabet
            count = [0] * 26
            #loop through each character in the word, find the characters position in the alphabet starting
            #at 0
            for char in word: 
                index = ord(char) - ord('a')
                #increment the count for that character by 1
                count[index] += 1
            # convert the count list into a tuple so it can be used as a key in the list
            key = tuple(count)

            if key not in map:
                map[key] = []
            
            map[key].append(word)

        return list(map.values())