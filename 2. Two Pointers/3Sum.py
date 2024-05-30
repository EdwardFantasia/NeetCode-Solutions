sortedArr = nums
        sortedArr.sort()
        replace = 0
        sets = []
        curSum = 0
        curSet = []
        for i in range(len(nums)):
            replace = sortedArr.pop(i)
            l = 0
            r = len(sortedArr) - 1
            while l < r:
                curSum = replace + sortedArr[l] + sortedArr[r]
                if curSum == 0:
                    curSet.append(replace)
                    curSet.append(sortedArr[l])
                    curSet.append(sortedArr[r])
                    curSet.sort()
                    if curSet not in sets:
                        sets.append(curSet)
                    curSet = []
                    l += 1
                    r = r - 1
                elif curSum > 0:
                    r = r - 1
                elif curSum < 0:
                    l += 1
            sortedArr.insert(i, replace)
        return sets
