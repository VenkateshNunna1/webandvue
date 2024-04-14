package strings1;

public class reeplace {

	public static void main(String[] args) {
	String s="venkatesh";
	int count=s.length();
	s=s.replace("e", "");
	int count1=s.length();
	int length=count-count1;
	System.out.println(length);
	}

}
