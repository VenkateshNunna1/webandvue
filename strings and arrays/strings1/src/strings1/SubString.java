package strings1;

public class SubString {

	public static void main(String[] args) {
	String s="banana";
	for(int i=0;i<=s.length()-2;i++) {
		for(int j=i+1;j<=s.length()-1;j++ ) {
			if(isPalindrome(s,i,j)) {
				System.out.println(s.substring(i, j+1));
			}
		}
	}

	}
	static boolean isPalindrome(String s,int i,int j) {
		char[] c= s.toCharArray();
		while(i<j) {
			if(c[i]!=c[j]) {
				return false;
			}
			i++;j--;
		}
		return true;
	}



}
