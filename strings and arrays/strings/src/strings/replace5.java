package strings;

public class replace5 {
  public static void main(String[] args) {
	String s="venkatesh";
	char[] chararray=s.toCharArray();
	int[] countarr = new int[26];
	for(char ch:chararray) {
		int index =ch-'a';
		countarr[index]++;
	}
	char ch='a';
	for(int c:countarr) {
		
		if(c>0) {
			System.out.println(ch+"="+c);
		}
		ch++;
	}
  
}
}
