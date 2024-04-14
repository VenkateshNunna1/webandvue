package factorydesignpattern;

public class Shapefactory {
    public Shape shapefactory(String item ) {
    	if(item.equals("Rectangle")) {
    	      return new Rectangle();
    	
    	}
    	else if(item.equals("Square")) {
    		return new Square();
    		
    	}
    	else if(item.equals("Triangle")) {
    		return new Triangle();
    	
    	}
		return null;
    }
}
