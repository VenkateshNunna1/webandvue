package com.java.Arrays;

public class SpiralMatrix1 {
    public static void main(String[] args) {
        int n1 = 3;

        int[][] matrix1 = generateMatrix(n1);
        printMatrix(matrix1);

      
    }

    public static int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];

        int num = 1;
        int left = 0, right = n - 1, top = 0, bottom = n - 1;

        while (left <= right && top <= bottom) {
            // Traverse from left to right
            for (int i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;

            // Traverse from top to bottom
            for (int i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            right--;

            // Traverse from right to left
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    matrix[bottom][i] = num++;
                }
                bottom--;
            }

            // Traverse from bottom to top
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    matrix[i][left] = num++;
                }
                left++;
            }
        }

        return matrix;
    }

    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int num : row) {
                System.out.print(num + " ");
            }
            System.out.println();
        }
        System.out.println();
    }
}