import { NextResponse } from 'next/server';

export async function GET() {
  try {
    return NextResponse.json({
      status: 'ok',
      message: 'API está funcionando corretamente!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Erro interno do servidor',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      status: 'ok',
      message: 'POST request recebido com sucesso!',
      data: body,
      timestamp: new Date().toISOString()
    });
  } catch {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Erro ao processar POST request',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 