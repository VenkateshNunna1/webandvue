package com.java.strings;

public class Reverse {

	public static void main(String[] args) {
	String s="banana";
	String rev=isReverse(s);
	System.out.println(rev);

	}
	static String isReverse(String s) {
		int i=0;
		int j=s.length()-1;
		char[] arr = s.toCharArray();
		while(i<j) {
			char temp = arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
			i++;
			j--;
		}
		return new String(arr);
	}

}
