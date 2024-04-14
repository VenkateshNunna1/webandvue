package strings;

public class Substring3 {

	public static void main(String[] args) {
		String s="banana";
		for(int i=0;i<=s.length()-1;i++) {
			for(int j=i+1;j<=s.length()-1;j++) {
				if(isPalindrome(i,j,s)) {
					System.out.println(s.substring(i, j+1));
				}
			}
		}
	}
	public static boolean isPalindrome(int i,int j,String s) {
		char[] arr = s.toCharArray();
		int start=i;
		int end=j;
		while(i<j) {
			if(arr[start]!=arr[end]) {
				return false;
			}
			i++;
			j--;
		}
		return true;
	}
	   
	

}
