package com.java.Arrays;

import java.util.Arrays;

public class QuickSort {

	public static void main(String[] args) {
	    int[] arr= {1,8,9,53,32,1,2,4,6};
	    int i=0;
	    int j=arr.length-1;
	    Sort(arr,i,j);
	  for(int arr1:arr) {
		  System.out.println(arr1);
	  }
	}
	static void Sort(int[] arr,int start,int end) {
		if(start>=end) {
			return ;
		}
		
		
		int pivot=arr[(start+end)/2];
		int i=start;
		int j=end;
		while(i<=j) {
			while(arr[i]<pivot) {
			i++;
			}
			while(arr[j]>pivot) {
				j--;
			}
			if(i<=j) {
				int temp=arr[i];
				arr[i]=arr[j];
				arr[j]=temp;
				i++;
				j--;
				
			}
		}
		Sort(arr,start,j);
	    Sort(arr,i,end);
		
	}

}
