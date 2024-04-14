package com.java.Arrays;

public class InsertionSort1 {

	public static void main(String[] args) {
		int arr[] = {2,56,8,6,1,3,4};
		sort(arr);
		for(int arr1:arr) {
				System.out.println(arr1);
		}
		

	}
   static int[] sort(int[] arr) {
	   for(int i=1;i<=arr.length-1;i++) {
		   int temp=arr[i];
		  int  j=i-1;
		   while(j>=0 && temp<arr[j]) {
			   arr[j+1] =arr[j];
			   j=j-1;
		   }
		   arr[j+1]=temp;
		   
	   }
	   return arr;
   }
}
