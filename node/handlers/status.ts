export async function status(ctx: Context, next: () => Promise<any>) {
  const code = ctx.vtex.route.params.code as string
  const { catalog } = ctx.clients

  const data = await catalog.getSkuById(code)

  ctx.status = 200
  ctx.body = data

  await next()
}