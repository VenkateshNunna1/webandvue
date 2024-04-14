package strings;

public class vowels {

	public static void main(String[] args) {
	   String s="VENKATESH";
	   int count=0;
	   s= s.toLowerCase();
	
	   
	   for(int i=0;i<=s.length()-1;i++) {
		  char A = s.charAt(i);
		    if(A=='a' || A=='e'|| A=='i'||A=='o'||A=='u') {
		    	count++;
		    }
	   }
	   System.out.println(count);
	}

}
