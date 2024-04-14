package strings1;

public class Palindrome {

	public static void main(String[] args) {
		String s="Malayalam";
	    boolean t=isPalindrome(s);
	    System.out.println(t);

	} 
	public static  boolean isPalindrome(String s) {
		char[] arr=s.toLowerCase().toCharArray();
		int i=0;
		int j=s.length()-1;
		while(i<j) {
			if(arr[i]!=arr[j]) {
				return false;
			}
			i++;
			j--;
		}
		return true;
	}
}
