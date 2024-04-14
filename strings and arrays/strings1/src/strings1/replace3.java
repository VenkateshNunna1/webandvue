package strings1;

public class replace3 {

	public static void main(String[] args) {
		String s="venkatesh";
		char[] charArr= s.toCharArray();
		int[] countarr= new int[26];
		for(int i=0;i<=charArr.length-1;i++) {
			int index=charArr[i]-'a';
			countarr[index]++;		
		}
		char ch='a';
		for(int i=0;i<=countarr.length-1;i++) {
			if(countarr[i]>0) {
				System.out.println(ch+" "+countarr[i]);
			}
			ch++;
		}
	}

}
