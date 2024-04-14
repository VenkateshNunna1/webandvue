package strings1;

import java.util.Arrays;

public class Anagram {

	public static void main(String[] args) {
	String s1="silent";
	String s2="listen";
	boolean b=Anagram(s1, s2);
	if(b) {
		System.out.println("both strings are anagrams");
	}
	else {
		System.out.println("not a anagram");
	}

	}
	static boolean Anagram(String s1,String s2) {
      char[] c1= s1.toCharArray();
      char[] c2= s2.toCharArray();
      if(c1.length!=c2.length) {
    	  return false;
      }
      Arrays.sort(c1);
      Arrays.sort(c2);
      int i=0;
      int j=0;
      while(i<c1.length || j<c2.length )    {  
    	  if(c1[i]!=c2[j]) {
    		  return false;
    	  }
    	  i++;
    	  j++;
      }
      return true;
	}

}
