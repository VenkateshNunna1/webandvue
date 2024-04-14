package strings;

public class Capto0small {

	public static void main(String[] args) {// TODO Auto-generated method stub
       String s="vEnKaTeSh";
        char[] c =s.toCharArray();
        for(int i=0;i<=c.length-1;i++) {
        	char t= c[i];
        	if(t>='A' && t<='Z') {
        		 t= (char) (t+32);
        	}
        	else {
        	 t =(char) (t-32);
        	}
        	 System.out.print(t);

        }
       	}

}
