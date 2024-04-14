package strings;

public class replace4 {

	public static void main(String[] args) {
		String s="venkatesh";
		char[] arr = s.toCharArray();
		int i=0;
		try{
		while(arr.length>0) {
			String s1 = s.replace(arr[i]+"", "");
			int count =s.length()-s1.length();
			System.out.println(arr[i]+"="+count);
			s=s1;
			i++;
		}
		}
		catch(ArrayIndexOutOfBoundsException ae) {
			System.out.println("program executed successfully");
		}

	}

}
