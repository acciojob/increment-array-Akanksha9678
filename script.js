let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code her
	 let arr2=[];
	for(let t of arr){
		arr2.push(t+1);
	}
	return arr2;
}

 alert(incrementArray(arr));
