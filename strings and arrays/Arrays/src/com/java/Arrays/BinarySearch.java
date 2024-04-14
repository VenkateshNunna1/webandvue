package com.java.Arrays;

import java.util.Arrays;

public class BinarySearch {

	public static void main(String[] args) {
	int[] arr = {24,6,7,89,68,8};
	int target=82;
	 Arrays.sort(arr);
	 int c= binarySearch(arr, target);
	 if(c==1) {
		 System.out.println("element is found");
	 }
	 else {
		 System.out.println("element not found");
	 }

	}
	public static int binarySearch(int arr[],int target) {
		int start=0;
		int end=arr.length-1;
		while(start<=end) {
			int mid=(start+end)/2;
			if(arr[mid]==target) {
				return 1;
			}
			else if(target>arr[mid]) {
				start=mid+1;
			}
			else {
				end=mid-1;
			}
		}
		return -1;
	}

}
