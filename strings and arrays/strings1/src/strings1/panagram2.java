package strings1;

public class panagram2 {

	public static void main(String[] args) {
	String s1="the quick brown fox jumps over the lazy dog";
	boolean b = Anagram(s1);
	if(b) {
		System.out.println("given string is anagram");
	}
	else {
		System.out.println("not a anagram");
	}

	}
	static boolean Anagram(String s) {
		s=s.replace(" ","");
		char[] charArr= s.toCharArray();
		int[] countarr= new int[26];
		for(int i=0;i<=charArr.length-1;i++) {
			int index=charArr[i]-'a';
			countarr[index]++;		
		}
		for(int i=0;i<=countarr.length-1;i++) {
			if(countarr[i]==0) {
			     return false;
			}
		}
		return true;
	}

}
