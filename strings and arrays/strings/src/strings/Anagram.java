package strings;

import java.util.Arrays;

public class Anagram {

	public static void main(String[] args) {
		String s="brag";
		String s1="grab";
		boolean b=isAnagram(s,s1);
		if(b){
		System.out.println("given strings are anagram");
		}
		else {
			System.out.println("given strings are not anagram");
		}

	}
	static boolean isAnagram(String s,String s1) {
		char[] arr1=s.toLowerCase().toCharArray();
		char[] arr2=s1.toLowerCase().toCharArray();
		if(arr1.length!=arr2.length) {
			return false;
		}
		Arrays.sort(arr1);
		Arrays.sort(arr2);
		int i=0;
		int j=0;
		while(i<arr1.length || j<arr2.length) {
			if(arr1[i]!=arr2[j]) {
				return false;
			}
			i++;
			j++;
			
		}
		return true;
	}

}
