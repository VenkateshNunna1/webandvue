package com.java.Arrays;

public class AntiDiagonal {

	public static void main(String[] args) {
		int[][] arr= {
				{1,2,3},
				{4,5,6},
				{7,8,9}
		};
		int sum=0;
		for(int i=0;i<=arr.length-1;i++) {
		for(int j=0;j<=arr.length-1;j++) {
			if(i==j) {
				sum=sum+arr[i][j];
			}
			if(i+j==arr.length-1)
				sum=sum+arr[i][j];
			}
		
		}
		System.out.println(sum);

	

	}

}
