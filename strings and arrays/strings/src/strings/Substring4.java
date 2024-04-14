package strings;

public class Substring4 {

	public static void main(String[] args) {
		String s="venkatesh";
		for(int i=0;i<=s.length()-1;i++) {
			for(int j=i+1;j<=s.length();j++) {
				System.out.println(s.substring(i, j));
			}
		}

	}

}
