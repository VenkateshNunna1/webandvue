package strings;

public class ex2 {

	public static void main(String[] args) {
			String s="venky#123";
			 char[] arr =s.toCharArray();
			 for(int i=0;i<=arr.length-1;i++) {
				 if((arr[i]>='a'&&arr[i]<='z')||(arr[i]>='A' && arr[i]<='Z')) {
					  arr[i]=(char) i;
				 }
			 }
			 System.out.println(arr);

	}

}
