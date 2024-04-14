package strings;

public class Count {

	public static void main(String[] args) {
		String s="success";
		main(s);

	}
	static void main(String s) {
		char[] arr = s.toCharArray();
		String s1=" ";
		int i=0;
		while(i<arr.length) {
			char c=arr[i];
			int count=1;
			i++;
			while(i<arr.length&& c==arr[i]) {
				count++;
				i++;
			}
			s1=s1+count+c;
			
		}
		System.out.println(s1);
	}

}
