import { NextResponse, NextRequest } from "next/server";

const data = [
    {
        id : 1,
        name: 'Sepatu',
        Price: '100000'
    },
    {
        id : 2,
        name: 'Sepatu UIASSA',
        Price: '12123'
    },
]
export async function GET(request: NextRequest){
    const {searchParams} = new URL(request.url);
    const id = searchParams.get('id');
    console.log(id);
    
    if(id){
        const detail = data.find((item) => item.id === Number(id) )
        if(detail){
            
            return NextResponse.json({status: 200, message: "Success", data: detail})
        }

        return NextResponse.json({status: 404, message: "Not Found", data: {}})
    }


    return NextResponse.json({status: 200, message: "Success", data})

}