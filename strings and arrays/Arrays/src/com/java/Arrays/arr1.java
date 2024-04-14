package com.java.Arrays;

public class arr1 {

	public static void main(String[] args) {
		int[] a= {1,2,3,4};
		int[] b =getConcatenation(a);
		for(int c:b) {
			System.out.println(c);
		}

	}
	
	    public static int[] getConcatenation(int[] nums) {
	        int[] ans= new int[nums.length*2];
	        for(int i=0;i<=ans.length-1;i++){
	            if(i<nums.length)
	                  ans[i] = nums[i];
	             else
	                 ans[i]=nums[i-nums.length];
	        }
	        return ans;
	    }
	}


