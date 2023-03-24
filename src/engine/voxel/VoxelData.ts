
// General description for voxels

export class VoxelData
{
    static readonly VERTICES: number[][] =  [
        [0, 0, 0], // vertex 0
        [1, 0, 0], // vertex 1
        [1, 1, 0], // vertex 2
        [0, 1, 0], // vertex 3
        [0, 0, 1], // vertex 4
        [1, 0, 1], // vertex 5
        [1, 1, 1], // vertex 6
        [0, 1, 1]  // vertex 7
    ];
    
    static readonly SEQ_VERTICES =  [
        0,1,2, 0,2,3, //front
        1,5,6,1,6,2,  //right
        5,4,7,5,7,6,  //back
        4,0,3,4,3,7,  //left
        7,3,2,7,2,6,  //top
        5,1,0,5,0,4   //bottom
    ];

    static readonly INDICES = [
        0,1,2 , 3,4,5 ,// front
        6,7,8 , 9,10,11 , //right
        12,13,14 , 15,16,17, //back
        18,19,20 , 21,22,23, //left
        24,25,26 , 27,28,29, //top
        30,31,32 , 33,34,35 //bottom
    ]
 
    static readonly FRONT_UV    = [0,0, 1,0, 1,1, 0,0, 1,1 ,0,1 ];
    static readonly RIGHT_UV    = [0,0, 1,0, 1,1, 0,0, 1,1 ,0,1 ];
    static readonly BACK_UV     = [0,0, 1,0, 1,1, 0,0, 1,1 ,0,1 ];
    static readonly LEFT_UV     = [0,0, 1,0, 1,1, 0,0, 1,1 ,0,1 ];
    static readonly TOP_UV      = [0,0, 1,0, 1,1, 0,0, 1,1 ,0,1 ];
    static readonly BOTTOM_UV   = [0,0, 1,0, 1,1, 0,0, 1,1 ,0,1 ];
}