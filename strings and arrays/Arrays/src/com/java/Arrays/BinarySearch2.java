package com.java.Arrays;

public class BinarySearch2 {

	public static void main(String[] args) {
		int[] arr= {2,4,5,67,788,88};
		int target=2;
		int c = binarySearch(arr, target);
		if(c==1) {
			System.out.println("element is found");
		}
		else {
			System.out.println("element not found");
		}
		

	}
	static int binarySearch(int arr[],int target) {
		int start=0;
		int end=arr.length-1;
		while(start<=end) {
			int mid=(start+end)/2;
			if(target==arr[mid]) {
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
