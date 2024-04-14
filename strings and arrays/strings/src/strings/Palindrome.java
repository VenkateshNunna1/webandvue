package strings;

public class Palindrome {

	public static void main(String[] args) {
		String s ="Venky";
		Boolean b = isPalindrome(s);
		if(b==true) {
			System.out.println("it is a palindrome");
		}
		else {
			System.out.println("it is not a palindrome");
		}

	}

	public static boolean isPalindrome(String s) {
		char[] c =s.toLowerCase().toCharArray()	;
	    int i=0;
	    int j=s.length()-1;
	    while(i<j) {
	    	if(c[i]!=c[j]) {
	    		return false;
	    	}
	    	i++;
	    	j--;
	    }
	    return true;
	}
}
