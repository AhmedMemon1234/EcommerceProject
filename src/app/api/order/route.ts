import { NextResponse } from 'next/server';

let orders:any = [];  

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const { userId, cartItems, totalAmount } = await request.json();
  const newOrder = { userId, cartItems, totalAmount, status: 'pending', orderId: orders.length + 1 };
  orders.push(newOrder);
  return NextResponse.json(newOrder);
}
