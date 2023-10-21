import { PrismaClient } from "@prisma/client";
let prisma;
if (process.env.NODE_ENV === "development") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}
const load = async () => {
  try {
    const votes = await prisma.hand.findMany();
    return { votes };
  } catch (err) {
    console.error(err);
    throw new Error("Erro ao tentar obter o(s) registro(s)");
  }
};
const actions = {
  like: async ({ request }) => {
    try {
      const data = await request.formData();
      const [id, like] = [Number(data.get("id")), Number(data.get("like"))];
      if (isNaN(id) || isNaN(like))
        throw new Error("ID e/ou Like não são números válidos");
      await prisma.hand.update({ where: { id }, data: { like } });
    } catch (err) {
      console.error(err);
      throw new Error("Erro ao tentar atualizar o campo like");
    }
  },
  dislike: async ({ request }) => {
    try {
      const data = await request.formData();
      const [id, dislike] = [Number(data.get("id")), Number(data.get("dislike"))];
      if (isNaN(id) || isNaN(dislike))
        throw new Error("ID e/ou Like não são números válidos");
      await prisma.hand.update({ where: { id }, data: { dislike } });
    } catch (err) {
      console.error(err);
      throw new Error("Erro ao tentar atualizar o campo dislike");
    }
  }
};
export {
  actions,
  load
};
