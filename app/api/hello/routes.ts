'use server'
export async function GET(request:Request) {
    return new Response ('hi')
    
}
export async function POST (req:Request) {
const body = req.body
console.log(body)    
return new Response(JSON.stringify({hello:'world'}))
}
