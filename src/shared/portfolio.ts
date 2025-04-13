import fasberryland from "#assets/images/portfolio/fasberry-case.jpg";
import bikini from "#assets/images/portfolio/bikini-case.png";
import catdogfrow from "#assets/images/portfolio/catdogfrog-case.png";
import etherflow from "#assets/images/portfolio/etherflow-case.jpg"
import zetanite from "#assets/images/portfolio/zetanite-case.jpg"
import piclock from "#assets/images/portfolio/piclock-case.jpg"
import fasberryforum from "#assets/images/portfolio/fasberry-forum-case.jpg"
import solanahub from "#assets/images/portfolio/solanahub-case.jpg"

export const PORTFOLIO_CASES = [
  {
    name: "Fasberry",
    description: "Landing for a Minecraft project",
    type: "Landing",
    image: fasberryland,
    availableTo: true,
    link: "https://fasberry.su",
  },
  {
    name: "BIKINI",
    description: "Business card website for a new meme coin in the cryptocurrency industry",
    type: "Business card website",
    image: bikini,
    availableTo: false,
    link: null,
  },
  {
    name: "CATDOGFROG",
    description: "Business card website for a new coin in the cryptocurrency industry",
    type: "Business card website",
    image: catdogfrow,
    availableTo: false,
    link: null,
  },
  {
    name: "Zetanite",
    description: "Landing for ZETA coin project",
    type: "Landing",
    image: zetanite,
    availableTo: true,
    link: "https://zetanite.xyz",
  },
  {
    name: "Piclock",
    description: "App for image editing and saving",
    type: "App",
    image: piclock,
    availableTo: true,
    link: "https://piclock.cc",
  },
  {
    name: "NDA Ethereum Token",
    description: "Landing for a NDA ETH project",
    type: "Landing",
    image: etherflow,
    availableTo: true,
    link: "https://etherflow-snowy.vercel.app/",
  },
  {
    name: "Fasberry Forum",
    description: "Forum for a Minecraft project",
    type: "Forum",
    image: fasberryforum,
    availableTo: true,
    link: "https://cc.fasberry.su",
  },
  {
    name: "NDA Solana Token",
    description: "Landing for a NDA Solana project",
    type: "Landing",
    image: solanahub,
    availableTo: true,
    link: "https://solanahub-liart.vercel.app/",
  },
]