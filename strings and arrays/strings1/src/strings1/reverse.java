package strings1;

public class reverse {

	public static void main(String[] args) {
	String s="venkatesh ";
	String s1=reverse(s);
	System.out.println(s1);
	}
	static String reverse(String s) {
		char[] arr=s.toCharArray();
		int i=0;
		int j=arr.length-1;
		while(i<j) {
			char temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
			i++;
			j--;
		}
		return new String(arr);
	}

}
