package com.java.Arrays;

public class SeocondSmallest {

	public static void main(String[] args) {
	int[] arr= {4,3,78,9,9,0,1};
	int s=arr[0];
	int ss=-arr[0];

	for(int i=1;i<=arr.length-1;i++) {
		if(arr[i]<s) {
		    ss=s;
		    s=arr[i];
		}
		else if(arr[i]<ss || s==ss) {
			ss=arr[i];
		}
	}
	System.out.println(ss);
	


	}

}
