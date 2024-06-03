class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        maxOut = 0
        l = 0
        r = len(height) - 1
        while(l < r):
            if (min(height[l], height[r]) * (r - l)) > maxOut:
                maxOut = min(height[l], height[r]) * (r - l) 
            if height[l] > height[r]:
                r -= 1
            else:
                l += 1

        return maxOut
