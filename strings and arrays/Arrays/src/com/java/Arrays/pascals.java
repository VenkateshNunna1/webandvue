package com.java.Arrays;

import java.util.Scanner;

public class pascals {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int number=1;
		int n=in.nextInt();
		int spaces=n-1;
		for(int i=0;i<n;i++) {
			for(int j=1;j<=spaces;j++) {
				System.out.print(" ");
			}
			number=1;
			for(int j=0;j<=i;j++) {
				System.out.print(number+" ");
				number=number *(i-j)/(j+1);
			}
			spaces--;
			System.out.println();
		}
	}

}
