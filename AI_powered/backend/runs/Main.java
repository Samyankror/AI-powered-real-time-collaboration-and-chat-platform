 import java.util.*;
 class Solution {
    public static  int minCost(int n) {
        int dp[] = new int[n+1];
        Arrays.fill(dp,-1);
        return helper(n,dp);
    }

    public static int helper(int n,int dp[]){
        if(n==1 || n==2) return n-1;
        if(dp[n]!=-1) return  dp[n];
        int min = Integer.MAX_VALUE;
        for(int i=1;i<=n/2;i++){
            int ans = i*(n-i);
            min = Math.min(min,ans+helper(i,dp) + helper(n-i,dp));
        }

        return  dp[n] = min;
    }
    public   static void main(String args[]){
        System.out.println(minCost(10));
    }
}