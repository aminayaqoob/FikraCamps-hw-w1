function Rotation(array,RotationNumber){
    for(let i=0;i<RotationNumber;i++){
        var tmp=array[0];
        for(let j=0;j<array.length;j++){
            array[j]=array[j+1]
        }
        array[array.length-1]=tmp;
    }
    return array
}
console.log(Rotation([1,2,3,4,5,6,7,8,9,10],4))
