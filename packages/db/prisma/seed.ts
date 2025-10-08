import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
const prisma = new PrismaClient()

async function main() {
  const abhinav = await prisma.user.upsert({
    where: { number: '9876543210' },
    update: {},
    create: {
      number: '9876543210',
      password: await bcrypt.hash('abhinav', 10),
      name: 'abhinav',
      Balance: {
        create: {
            amount: 20000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "token__1",
          provider: "HDFC Bank",
        },
      },
    },
  })
  const kartik = await prisma.user.upsert({
    where: { number: '9876543211' },
    update: {},
    create: {
      number: '9876543211',
      password: await bcrypt.hash('kartik', 10),
      name: 'kartik',
      Balance: {
        create: {
            amount: 2000,
            locked: 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "token__2",
          provider: "HDFC Bank",
        },
      },
    },
  })
  console.log({ abhinav, kartik })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })