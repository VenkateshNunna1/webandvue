package com.java.Arrays;

import java.util.Arrays;

public class Array2 {

	public static void main(String[] args) {
		int[] arr= {5,7,89,2,1};
		int small=arr[0];
		for(int i=1;i<=arr.length-1;i++) {
			if(small>arr[i]) {
				small=arr[i];
			}
		}
		System.out.println(small);
		Arrays.sort(arr);
     for(int arr1:arr) {
    	 System.out.println(arr1);
     }
     System.out.println("the seocond largest element is:"+arr[arr.length-2]);

	}

}
