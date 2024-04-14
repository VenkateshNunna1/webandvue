package strings;

public class palindrome1 {

	public static void main(String[] args) {
		String s="Malayala";
		boolean c = isPalindrome(s);
		if(c) {
			System.out.println("given string is palindrome");
		}
		else {
			System.out.println("not a palindrome");
		}
		

	}
	public static boolean isPalindrome(String s) {
		char[] arr = s.toLowerCase().toCharArray();
		int i=0;
		int j=s.length()-1;
		while(i<j) {
			if(arr[i]!=arr[j]) return false;
			i++;
			j--;
		}
		return true;
	}

}
