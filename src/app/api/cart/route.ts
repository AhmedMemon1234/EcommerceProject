import { NextResponse } from 'next/server';

interface Product {
  productId: number;
  quantity: number;
}

let cart: Product[] = []; 

export async function GET() {
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  const { productId, quantity }: Product = await request.json();
  const product: Product = { productId, quantity };
  cart.push(product);
  return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
  const { productId }: { productId: number } = await request.json();
  cart = cart.filter(item => item.productId !== productId);
  return NextResponse.json(cart);
}
