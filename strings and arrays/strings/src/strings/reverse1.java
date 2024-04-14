package strings;

public class reverse1 {

	public static void main(String[] args) {
		String s="venkatesh";
		char[] s1 = reverse(s);
		System.out.println(s1);
		

	}
	public static char[] reverse(String s) {
		char[] arr = s.toCharArray();
		int i=0;
		int j=s.length()-1;
		while(i<j) {
			char temp = arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
			i++;
			j--;
		}
		return arr;
		
	}

}
