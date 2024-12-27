import { NextResponse } from 'next/server';

interface Product {
  productId: number;
  quantity: number;
}

let cart: Product[] = []; 

const API_SECRET_KEY = process.env.API_SECRET_KEY;

function isAuthorized(request: Request) {
  const authHeader = request.headers.get('Authorization');
  return authHeader === API_SECRET_KEY;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json(cart);
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { productId, quantity }: Product = await request.json();
  const product: Product = { productId, quantity };
  cart.push(product);
  return NextResponse.json(cart);
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { productId }: { productId: number } = await request.json();
  cart = cart.filter((item) => item.productId !== productId);
  return NextResponse.json(cart);
}
