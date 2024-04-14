package com.java.Arrays;

import java.util.Arrays;

public class SpiralMatrix2 {

	public static void main(String[] args) {
		int  n=5;
		int[][] a = generateMatrix(n);
		for(int[] a1:a) {
			System.out.println(Arrays.toString(a1));
		}

	}
	public static int[][] generateMatrix(int n){
		int[][] arr = new int[n][n];
		int num=1;
		int left=0;
		int right=n-1;
		int top=0;
		int bottom=n-1;
		while(left<=right && top<=bottom) {
			for(int i=left;i<=right;i++) {
				arr[top][i]=num++;
			}
			top++;
			for(int i=top;i<=bottom;i++) {
				arr[i][right]=num++;
			}
			right--;
			if(left<=right&&top<=bottom) {
			for(int i=right;i>=left;i--) {
				arr[bottom][i]=num++;
			}
			bottom--;
			for(int i=bottom;i>=top;i--) {
				arr[i][left]=num++;
			}
			left++;
			}
		}
		return arr;
	}

}
