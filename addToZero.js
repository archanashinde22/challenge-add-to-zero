// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

for(let i=0;i<array.length;i++){

    for(let j=i+1;j<array.length;j++)
    {
        if((array[i] + array[j])===0)
        {
            console.log(`TRUE`)
            return;
            //break;
    
        }
        else 
        {
            console.log(`False`);
        }
    }
}