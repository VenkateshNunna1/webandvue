package strings;

public class replac2 {

	public static void main(String[] args) {
		String s="venkatesh";
		int count = s.length();
		System.out.println(count);
	     String s1 = s.replace("e", "");
	     int count1=s1.length();
	     System.out.println(count1);
	     System.out.println(s1);
		System.out.println(count-count1);

	}

}
