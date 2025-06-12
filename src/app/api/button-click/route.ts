import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { buttonId, page, metadata } = body;

    if (!buttonId || !page) {
      return NextResponse.json(
        { error: 'buttonId e page são obrigatórios' },
        { status: 400 }
      );
    }

    const userAgent = request.headers.get('user-agent') || null;
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const ipAddress = forwardedFor?.split(',')[0] || realIp || null;

    // Criar registro no banco
    const buttonClick = await prisma.buttonClick.create({
      data: {
        buttonId,
        page,
        userAgent,
        ipAddress,
        metadata: metadata || {},
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Clique registrado com sucesso',
      data: {
        id: buttonClick.id,
        buttonId: buttonClick.buttonId,
        page: buttonClick.page,
        timestamp: buttonClick.timestamp,
      },
    });
  } catch (error) {
    console.error('Erro ao registrar clique:', error);
    return NextResponse.json(
      { 
        error: 'Erro interno do servidor',
        details: process.env.NODE_ENV === 'development' ? error : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const stats = await prisma.buttonClick.groupBy({
      by: ['buttonId'],
      where: {
        createdAt: {
          gte: thirtyDaysAgo,
        },
      },
      _count: {
        id: true,
      },
    });

    return NextResponse.json({
      success: true,
      stats: stats.map((stat: { buttonId: string; _count: { id: number } }) => ({
        buttonId: stat.buttonId,
        clicks: stat._count.id,
      })),
    });
  } catch (error) {
    console.error('Erro ao buscar estatísticas:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
} 