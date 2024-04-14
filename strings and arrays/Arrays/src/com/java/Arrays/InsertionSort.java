package com.java.Arrays;

public class InsertionSort {

	public static void main(String[] args) {
	int[] arr= {6,4,7,879,2,67,879,898};
	insertionSort(arr);
	for(int arr2:arr) {
		System.out.println(arr2);
	}
	
	}
	public static int[] insertionSort(int[] arr) {
		for(int i=1;i<arr.length;i++) {
			int temp=arr[i];
			int j=i-1;
			while(  j>=0&&temp<arr[j] ) {
				arr[j+1]=arr[j];
			  j=j-1;
			}
			arr[j+1]=temp;
			
			
		}
		return arr;
	}

}
