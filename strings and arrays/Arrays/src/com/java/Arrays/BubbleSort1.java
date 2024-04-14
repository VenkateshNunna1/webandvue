package com.java.Arrays;

public class BubbleSort1 {

	public static void main(String[] args) {
	int[] arr = {78,4,89,0765,22,1,2,7};
	bubbleSort(arr);
	for(int arr1:arr) {
		System.out.println(arr1);
	}
	
	}
	public static int[] bubbleSort(int[] arr) {
		for(int i=0;i<=arr.length-1;i++) {
			for(int j=0;j<=arr.length-2-i;j++) {
				if(arr[j]>arr[j+1]) {
					int temp=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=temp;
				}
			}
		}
		return arr;
	}

}
