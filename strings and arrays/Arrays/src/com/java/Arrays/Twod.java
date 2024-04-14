package com.java.Arrays;

import java.util.Arrays;

public class Twod {

	public static void main(String[] args) {
		int[][] arr= {
				{1,2,3},
				{3,4,5},
				{5,6,7}
		};
		for(int i=0;i<=arr.length-1;i++) {
			for(int j=0;j<=arr[i].length-1;j++) {
				System.out.println(arr[i][j]);
			}
		}
		System.out.println();
		for(int[] arr1:arr) {
			for(int arr2:arr1) {
				System.out.println(arr2);
			}
		}
		for(int[] arr1:arr) {
			System.out.println(Arrays.toString(arr1));
		}

	}

}
