package strings;

public class replace7 {

	public static void main(String[] args) {
	String s="venkatesh";
	char[] chararray= s.toCharArray();
	int[] countarray = new int[26];
	for(int i=0;i<=chararray.length-1;i++) {
		int index=chararray[i]-'a';
		countarray[index]=countarray[index]+1;
	}
	char ch='a';
	for(int i=0;i<=countarray.length-1;i++) {
		if(countarray[i]>0) {
			System.out.println(ch+" "+countarray[i]);
		}
		ch++;
	}
	}

}
