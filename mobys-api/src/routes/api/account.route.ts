const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

router.post("/", async (req: any, res: any, next: any) => {
  try {
    let { name, surname } = req.body;

    await prisma.user.update({
      where: { id: req.decoded.id },
      data: { name, surname },
    });

    res.json({ error: false });
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

router.post("/email", async (req: any, res: any, next: any) => {
  try {
    let email = req.body;
    let user = await prisma.user.findFirst({
      where: { id: req.decoded.id },
    });
    if (user) {
      if (user.email === email.current && email.new === email.newTry) {
        await prisma.user.update({
          where: { id: req.decoded.id },
          data: { email: email.new },
        });
        res.json({ error: false });
      } else {
        res.json({ error: true });
      }
    } else {
      res.json({ error: true });
    }
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

router.post("/password", async (req: any, res: any, next: any) => {
  try {
    let pass = req.body;
    let user = await prisma.user.findFirst({
      where: { id: req.decoded.id },
    });
    if (user) {
      let passwordCompare = await bcrypt.compare(pass.current, user.password);
      if (passwordCompare && pass.new === pass.newTry) {
        await bcrypt.hash(pass.new, 12, async (err: any, hash: any) => {
          if (!err)
            await prisma.user.update({
              where: { id: req.decoded.id },
              data: { password: hash },
            });
        });

        res.json({ error: false });
      } else {
        res.json({ error: true });
      }
    } else {
      res.json({ error: true });
    }
  } catch (error) {
    console.error(error);
    res.json({ error: true });
  }
});

module.exports = router;
