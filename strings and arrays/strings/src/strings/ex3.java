package strings;

public class ex3 {

	public static void main(String[] args) {
		String s="   India Is My Country";
		char[] c=   s.trim().toCharArray();
		int count=0;
		for(int i=0;i<=c.length-1;i++) {
			if(c[i]==' ') {
				count++;
			}
		}
		System.out.println(count+1);

	}

}
