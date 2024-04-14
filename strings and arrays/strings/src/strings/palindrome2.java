package strings;

public class palindrome2 {

	public static void main(String[] args) {
		String s="Malayalam";
		boolean b = isPalindrome(s);
	    if(b==true) {
	    	System.out.println(s+" is a palindrome....");
	    }
	    else {
	    	System.out.println(s+" is not apalindrome.....");
	    }

	}
	public static boolean isPalindrome(String s) {
		int i=0;
		int j=s.length()-1;
		while(i<j) {
			char c = s.toLowerCase().charAt(i);
		    char c1 =s.toLowerCase().charAt(j);
		    if(c!=c1) {
		    	return false;
		    }
		    i++;j--;
		}
		return true;
	}
		

}
