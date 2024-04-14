package strings;

public class reverse2 {

	public static void main(String[] args) {
	String s = "venkatesh";
	char[] c= reverse(s);
	System.out.println(c);
	

	}
	static char[] reverse(String s) {
		int i=0;
		int j=s.length()-1;
		char[] arr =s.toCharArray();
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

