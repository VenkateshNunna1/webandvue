package strings;

public class reverse {

	public static void main(String[] args) {
	String s="venkatesh";
	reverse(s);
	

	}
	public static void reverse(String s) {
		char[] c=s.toCharArray();
		int i=0;
		int j=s.length()-1;
		while(i<j) {
			char temp=c[i];
			c[i]=c[j];
			c[j]=temp;
			i++;
			j--;
	    
		}
		System.out.println(c);
		
		
	    
	}

}
