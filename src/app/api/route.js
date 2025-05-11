export const dynamic = "force-static"

export async function GET(request) {
    const data = {
        name: 'Bob',
        age: 10,
        bio: 'Some Info'
    }
  return new Response(JSON.stringify(data) + request.headers.get('user-agent'))
}


export async function POST(request) {
  return new Response(request.body)
}
export async function DELETE(request) {
  return new Response(request.body)
}