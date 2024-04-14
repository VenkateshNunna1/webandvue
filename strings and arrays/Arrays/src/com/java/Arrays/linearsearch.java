package com.java.Arrays;

public class linearsearch {

	public static void main(String[] args) {
	int[] arr= {0,6,78,9,99,9,0,4,333232,343};
	 int search=343;
	 for(int i=0;i<=arr.length-1;i++) {
		 if(arr[i]==search) {
			 System.out.println("element is found");
			 break;
		 }
	 }

	}

}
