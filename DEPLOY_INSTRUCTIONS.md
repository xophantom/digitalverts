# Instruções para Deploy na Vercel

## 🔧 Configuração de Variáveis de Ambiente

Na Vercel, adicione estas variáveis de ambiente:

### Nome: `DATABASE_URL`
### Valor:
```
postgres://neondb_owner:npg_klQ6d4JtVubR@ep-fragrant-union-acxbegmo-pooler.sa-east-1.aws.neon.tech/neondb?sslmode=require
```

## 🚀 Comandos de Build

O `package.json` foi configurado com:
- `build`: `prisma generate && next build`
- `postinstall`: `prisma generate`

Isso garante que o Prisma Client seja gerado durante o build.

## 📝 Notas Importantes

1. **Não use aspas** nas variáveis da Vercel
2. O Prisma será executado automaticamente durante o build
3. As funções API têm timeout de 30 segundos configurado
4. Logs do Prisma só aparecem em desenvolvimento

## 🔍 Troubleshooting

Se ainda houver erro de build:
1. Verifique se a variável `DATABASE_URL` está configurada
2. Certifique-se de que o banco Neon está ativo
3. Tente fazer um novo deploy após configurar as variáveis 