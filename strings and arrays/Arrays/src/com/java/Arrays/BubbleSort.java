package com.java.Arrays;

import java.util.Arrays;

public class BubbleSort {

	public static void main(String[] args) {
	 int[] arr= {23,5,6,78,9,90};
       int[] arr1=  bubbleSort(arr);
       for(int arr2:arr) {
    	   System.out.println(arr2);
       }
	}
	static int[] bubbleSort(int[] arr) {
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
