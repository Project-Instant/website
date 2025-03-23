import FasberryMainCase from "#assets/images/portfolio/fasberry_case.png";
import FasberryCase1 from "#assets/images/portfolio/fasberry_case_group_1.png"
import FasberryCaseMobile1 from "#assets/images/portfolio/fasberry_case_group_1_mobile.png"
import FasberryCaseMobile2 from "#assets/images/portfolio/fasberry_case_group_2_mobile.png"
import FasberryCaseMobile3 from "#assets/images/portfolio/fasberry_case_group_3_mobile.png"
import FasberryCaseMobile4 from "#assets/images/portfolio/fasberry_case_group_4_mobile.png"
import FasberryCaseMobile5 from "#assets/images/portfolio/fasberry_case_group_5_mobile.png"
import FasberryCase2 from "#assets/images/portfolio/fasberry_case_group_2.png"
import FasberryCase3 from "#assets/images/portfolio/fasberry_case_group_3.png"
import FasberryCase4 from "#assets/images/portfolio/fasberry_case_group_4.png"
import BIKINIMainCase from "#assets/images/portfolio/bikini_case.png";
import BIKINICase1 from "#assets/images/portfolio/bikini_case_group_1.png"
import BIKINICaseMobile1 from "#assets/images/portfolio/bikini_case_group_1_mobile.png"
import BIKINICaseMobile2 from "#assets/images/portfolio/bikini_case_group_2_mobile.png"
import BIKINICaseMobile3 from "#assets/images/portfolio/bikini_case_group_3_mobile.png"
import BIKINICaseMobile4 from "#assets/images/portfolio/bikini_case_group_4_mobile.png"
import BIKINICaseMobile5 from "#assets/images/portfolio/bikini_case_group_5_mobile.png"
import BIKINICase2 from "#assets/images/portfolio/bikini_case_group_2.png"
import BIKINICase3 from "#assets/images/portfolio/bikini_case_group_3.png"
import CATDOGFROGMainCase from "#assets/images/portfolio/catdogfrog_case.png";
import CATDOGFROGCase1 from "#assets/images/portfolio/catdogfrog_case_group_1.png"
import CATDOGFROGCase2 from "#assets/images/portfolio/catdogfrog_case_group_3.png"
import CATDOGFROGCase3 from "#assets/images/portfolio/catdogfrog_case_group_4.png"
import CATDOGFROGCase4 from "#assets/images/portfolio/catdogfrog_case_group_5.png"
import CATDOGFROGCase5 from "#assets/images/portfolio/catdogfrog_case_group_6.png"
import CATDOGFROGCaseMobile1 from "#assets/images/portfolio/catdogfrog_case_group_1_mobile.png"
import CATDOGFROGCaseMobile2 from "#assets/images/portfolio/catdogfrog_case_group_2_mobile.png"
import CATDOGFROGCaseMobile3 from "#assets/images/portfolio/catdogfrog_case_group_4_mobile.png"
import CATDOGFROGCaseMobile4 from "#assets/images/portfolio/catdogfrog_case_group_5_mobile.png"
import CATDOGFROGCaseMobile5 from "#assets/images/portfolio/catdogfrog_case_group_6_mobile.png"

export const PORTFOLIO_CASES = [
  {
    name: "Fasberry",
    description: "Website for a Minecraft server",
    type: "Landing",
    image: FasberryMainCase,
    backgroundColor: "bg-emerald-700",
    desktopCase: [FasberryMainCase, FasberryCase1, FasberryCase2, FasberryCase3, FasberryCase4],
    mobileCase: [FasberryCaseMobile1, FasberryCaseMobile2, FasberryCaseMobile3, FasberryCaseMobile4, FasberryCaseMobile5]
  },
  {
    name: "BIKINI",
    description: "Business card website for a new meme coin in the cryptocurrency industry",
    type: "Business card website",
    image: BIKINIMainCase,
    backgroundColor: "bg-cyan-600",
    desktopCase: [BIKINIMainCase, BIKINICase1, BIKINICase2, BIKINICase3],
    mobileCase: [BIKINICaseMobile1, BIKINICaseMobile2, BIKINICaseMobile3, BIKINICaseMobile4, BIKINICaseMobile5]
  },
  {
    name: "CATDOGFROG",
    description: "Business card website for a new coin in the cryptocurrency industry",
    type: "Business card website",
    image: CATDOGFROGMainCase,
    backgroundColor: "bg-yellow-800",
    desktopCase: [CATDOGFROGMainCase, CATDOGFROGCase1, CATDOGFROGCase2, CATDOGFROGCase3, CATDOGFROGCase4, CATDOGFROGCase5], // desktop cases
    mobileCase: [CATDOGFROGCaseMobile1, CATDOGFROGCaseMobile2, CATDOGFROGCaseMobile3, CATDOGFROGCaseMobile4, CATDOGFROGCaseMobile5] // mobile cases
  }
]