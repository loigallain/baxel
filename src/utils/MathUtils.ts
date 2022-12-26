
export class MathUtils{

    static addVector(a:number[], b:number[], l: number): number[]{
        var ret :number[];
        ret = [];
        for (var i=0;i<l;i++){
            ret = ret.concat(a[i]+b[i]);
        }
        return ret;
    }

}