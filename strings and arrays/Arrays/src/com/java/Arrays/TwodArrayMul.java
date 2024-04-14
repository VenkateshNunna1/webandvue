package com.java.Arrays;

import java.util.Arrays;

public class TwodArrayMul {
  public static void main(String[] args) {
	int[][] a= {
			{1,2,3},
			{4,5,6},
			{7,8,9}
	};
	int[][] b= {
			{1,2},
			{3,4},
			{5,6}
	};
	int[][] c=multiply(a,b);
	for(int[] c1:c ) {
		System.out.println(Arrays.toString(c1));
	}
	
}
  
  static int[][] multiply(int[][] a,int[][] b) {
	  int len1=a.length;
	  int len2=b.length;
	  int[][] c= new int[len1][len2-1];
	  for(int i=0;i<=len1-1;i++) {
		  for(int j=0;j<=len2-2;j++) {
			  int sum=0;
			  for(int k=0;k<=len1-1;k++) {
				  sum=sum+a[i][k]*b[k][j];
				 
			  }
			  c[i][j]=sum;
		  }
	  }
	return c;
	  
  }
}
