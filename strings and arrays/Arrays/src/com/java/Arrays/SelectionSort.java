package com.java.Arrays;

public class SelectionSort{
	public static void main(String[] args) {
		int[] arr= {6,5,2,8,9,4};
		selectionSort(arr);
		for(int arr2:arr) {
			System.out.print(arr2 +" ");
		}
		
	}
	static int[] selectionSort(int[] arr) {
		int temp=0;
		int minIndex=-1;
		for(int i=0;i<arr.length-1;i++) {
			  minIndex=i;
			for(int j=i+1;j<arr.length;j++) {
				if(arr[minIndex]>arr[j]) {
					minIndex=j;
				}
			}
			   temp=arr[minIndex];
				arr[minIndex]=arr[i];
				arr[i]=temp;
		}
		return arr;
	}
}