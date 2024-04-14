package strings;

public class Substring6 {

	public static void main(String[] args) {
		String s="Banana";
		for(int i=0;i<=s.length()-1;i++) {
			for(int j=i+1;j<=s.length()-1;j++) {
				if(isPalindrome(s,i,j)) {
					System.out.println(s.substring(i, j+1));
				}
			}
		}

	}
	public static boolean isPalindrome(String s,int i,int j) {
		char[] arr = s.toLowerCase().toCharArray();
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
