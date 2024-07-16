class Solution:
    def isValid(self, s: str) -> bool:
        isValid = True
        i = 0
        j = len(s) - 1
        if(len(s) % 2 == 1):
            return False
        while i < j:
            if (s[i] == "(" and s[j] == ")") or (s[i] == "[" and s[j] == "]") or (s[i] == "{" and s[j] == "}"):
                i += 1
                j -= 1
            else:
                if (s[i] == "(" and s[i+1] == ")") or (s[i] == "[" and s[i+1] == "]") or (s[i] == "{" and s[i+1] == "}"):
                    i += 2
                else:
                    isValid = False
                    break
        return isValid
