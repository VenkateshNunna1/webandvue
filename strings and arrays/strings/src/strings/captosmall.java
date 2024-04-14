package strings;

public class captosmall {

	public static void main(String[] args) {
	String s ="VenKatEsh";
	for(int i=0;i<=s.length()-1;i++) {
		char c = s.charAt(i);
		if(c>='A' && c<='Z') {
			 c=(char)(c+32);
		}
		else if(c>='a' && c<='z'){
			c=(char)(c-32);
		}
		System.out.print(c);
	}

	}

}
