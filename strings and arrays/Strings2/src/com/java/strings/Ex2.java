package com.java.strings;

public class Ex2 {
    public static void main(String[] args) {
        String input = "ram#123";
        String output = reverseString(input);
        System.out.println(output);
    }

    public static String reverseString(String input) {
        StringBuilder reversed = new StringBuilder();
        StringBuilder letters = new StringBuilder();
        StringBuilder numbers = new StringBuilder();

        // Separate letters and numbers
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                letters.insert(0, c); // Insert at the beginning for reverse order
            } else if (Character.isDigit(c)) {
                numbers.append(c);
            }
        }

        // Combine letters and numbers
        reversed.append(numbers).append(letters);

        return reversed.toString();
    }
}
