package com.java.Arrays;

import java.util.ArrayList;
import java.util.List;

public class spiral {

	public static void main(String[] args) {
	int[][] arr= {
			{1,2,3},
			{4,5,6},
			{7,8,9}
	};
	List<Integer> result = spiral(arr);
	 System.out.println(result);

	}
    static List<Integer> spiral(int[][] arr){
    	ArrayList<Integer> result =  new ArrayList<Integer>();
    	int top=0;
    	int bottom=arr.length-1;
    	int left=0;
    	int right=arr[0].length-1;
    	while( top<=bottom && left<=right ) {
    		for(int i=left;i<=right;i++) {
    			result.add(arr[top][i]);
    		}
    		top++;
    		for(int i=top;i<=bottom;i++) {
    			result.add(arr[i][right]);
    		}
    		right--;
    		if(top<=bottom && left<=right) {
    		for(int i=right;i>=left;i--) {
    			result.add(arr[bottom][i]);
    		}
    		bottom--;
    		for(int i=bottom;i>=top;i--) {
    			result.add(arr[i][left]);
    			
    		}
    		left++;
    		}
    	}
		return result;
    	
    }
}
