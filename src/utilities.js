export const sortArray = (array) => {
    let sorted = [];
    for(let i = 0 ; i < array.length; i++){
      let max = array[0];
      let maxIndex = 0;
      for(let j = 0 ; j < array.length; j++){
        if(max.value < array[j].value){
          max = array[j]
          maxIndex = j;
        }
      }
      sorted = [...sorted, {...max}];
      array[maxIndex].value = 0;
    }
    return sorted;
}