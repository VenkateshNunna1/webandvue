package com.java.Arrays;

import java.util.Arrays;

public class SpiralMatrix {

	public static void main(String[] args) {
	int[][] arr= {
			{1,2,3},
			{4,5,6},
			{7,8,9}
	};
	for(int i=0;i<=arr.length-1;i++) {
		for(int j=0;j<=arr[i].length-1;j++) {
			System.out.print(arr[j][i]+" ");
		}
		System.out.println();
	}
	}

}
