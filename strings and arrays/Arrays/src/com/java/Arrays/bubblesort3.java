package com.java.Arrays;

public class bubblesort3 {

	public static void main(String[] args) {
		int[] arr= {4,12,3,41,1,24,56,7};
		sort(arr);
		for(int arr1:arr) {
			System.out.println(arr1);
		}
		

	}
	static int[] sort(int[] arr) {
		for(int i=0;i<arr.length-1;i++) {
			for(int j=0;j<=arr.length-2;j++) {
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
