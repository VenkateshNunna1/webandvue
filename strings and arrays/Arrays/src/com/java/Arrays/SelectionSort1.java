package com.java.Arrays;

public class SelectionSort1 {

	public static void main(String[] args) {
		int[] arr= {45,1,245,56,898,89,9,3,21};
		sort(arr);
		for(int arr1:arr) {
			System.out.println(arr1);
		}
		

	}
	static int[] sort(int[] arr) {
		for(int i=0;i<=arr.length-2;i++) {
			int minIndex=i;
			for(int j=i+1;j<=arr.length-1;j++) {
				if(arr[j]<arr[minIndex]) {
				  minIndex=j;
				}
			}
			int temp=arr[minIndex];
			arr[minIndex]=arr[i];
			arr[i]=temp;
		}
		return arr;
	}

}
