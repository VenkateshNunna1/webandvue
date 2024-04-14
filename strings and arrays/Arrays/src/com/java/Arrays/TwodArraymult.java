package com.java.Arrays;

import java.util.Arrays;

public class TwodArraymult {

	public static void main(String[] args) {
	  int[][] a= {
			  {1,2,3},
			  {4,5,6},
			  {7,8,9}
	  };
	  int[][] b={
			  {1,2,3},
			  {4,5,6},
			  {7,8,9}
	  };
	 int[][]c= multiply(a,b);
	 for(int[] c1:c) {
		 System.out.println(Arrays.toString(c1));
	 }
	  

	}
	public static int[][] multiply(int[][] a,int[][] b){
		int len =a.length;
		int[][] c= new int[len][len];
		for(int i=0;i<=len-1;i++) {
			for(int j=0;j<=len-1;j++) {
				int sum=0;
				for(int k=0;k<=len-1;k++) {
					sum=sum+a[i][k]*b[k][j];
					c[i][j]=sum;
				}
			}
		}
		
		return c;
	}

}
