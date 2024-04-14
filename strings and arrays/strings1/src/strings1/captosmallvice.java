package strings1;

public class captosmallvice {

	public static void main(String[] args) {
		String s="VenkATEsh";
		char[] arr=s.toCharArray();
		for(int i=0;i<=s.length()-1;i++) {
			char c=0;
			if(arr[i]>='A' && arr[i]<='Z') {
				 arr[i]=   (char) (arr[i]+32);
			}
			else {
		         arr[i]= (char) (arr[i]-32);
			}
			
		}
		System.out.println(arr);

	}

}
