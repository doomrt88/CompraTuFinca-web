import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { Benefits } from "@/components/benefits"
import { PopularRegions } from "@/components/popular-regions"
import { SellerCTA } from "@/components/seller-cta"
import { WhatsappContact } from "@/components/whatsapp-contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <FeaturedProperties />
      <Benefits />
      <PopularRegions />
      <SellerCTA />
      <WhatsappContact />
      <SiteFooter />
    </main>
  )
}
