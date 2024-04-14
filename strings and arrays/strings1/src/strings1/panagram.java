package strings1;

import java.util.HashSet;
import java.util.Set;

public class panagram {

	public static void main(String[] args) {
	String s1="the quick brown fox jumps over the lazy dog";
	boolean b=isAnagram(s1);
	if(b) {
		System.out.println("given String is a Anagram");
	}
	else {
		System.out.println("given string is not a anagram");
	}
	}
	static boolean isAnagram(String s1) {
		s1=s1.replace(" ","");
		Set<Character> s = new HashSet<Character>();
		for(int i='a';i<='z';i++) {
			s.add((char)i);
		}
		for(int i=0;i<=s1.length()-1;i++) {
			s.remove(s1.charAt(i));
			if(s.isEmpty()) {
				return true;
			}
		}
		return false;
	}

}
