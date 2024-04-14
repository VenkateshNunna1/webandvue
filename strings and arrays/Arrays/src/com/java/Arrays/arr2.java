package com.java.Arrays;

public class arr2 {
   public static void main(String[] args) {
	int[] arr= {1,2,3,4};
	int[] a=runningSum(arr);
   for(int a1:a) {
	   System.out.println(a1);
   }
}
  
	    public static int[] runningSum(int[] nums) {
	        int[] arr= new int[nums.length];
	        int res=0;
	        for(int i=0;i<=nums.length-1;i++){
	            res=res+nums[i];
	            arr[i]=res;

	        }
	        return arr;
	    }
	}
