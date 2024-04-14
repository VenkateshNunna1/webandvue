package strings1;

public class count {

	public static void main(String[] args) {
	String s="success";
	String s2="";
	char[] arr= s.toCharArray();
	int i=0;
	while(i<=arr.length-1) {
		char c=arr[i];
       int count=1;
       i++;
       while(i<=arr.length-1&& c==arr[i]) {
    	   count++;
    	   i++;
       }
       s2=s2+count+c;
      
	}
	 System.out.println(s2);
	}

}
