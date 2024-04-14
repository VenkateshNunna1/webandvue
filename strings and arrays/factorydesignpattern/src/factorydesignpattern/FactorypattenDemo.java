package factorydesignpattern;

public class FactorypattenDemo {
    public static void main(String[] args) {
		Shapefactory sf = new Shapefactory();
		Shape s=sf.shapefactory("Rectangle");
		s.shape();
		Shape s1 = sf.shapefactory("Square");
		s1.shape();
		Shape s2=sf.shapefactory("Triangle");
		s2.shape();
	}
}
