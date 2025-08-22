"use client"

import PageLayout from "../../components/PageLayout"
import FadeInSection from "../../components/FadeInSection"
import { InteractiveCard } from "../../components/InteractiveCard"
import { caseStudies } from "../../src/config"
import Link from "next/link"
import { ArrowRight, Users, Clock, Building } from "lucide-react"

export default function CaseStudies() {
  return (
    <PageLayout
      title="Case Studies"
      subtitle="Real-world projects, challenges overcome, and measurable results achieved for clients across different industries."
    >
      <div className="space-y-16">
        <FadeInSection>
          <div className="grid gap-12">
            {caseStudies.map((study) => (
              <InteractiveCard key={study.id}>
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <img
                          src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent(study.title)}`}
                          alt={study.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span>{study.industry}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{study.team}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold mb-2">{study.title}</h2>
                      <p className="text-muted-foreground mb-4">{study.challenge}</p>

                      <Link
                        href={`/case-studies/${study.id}`}
                        className="inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        <span>Read Case Study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </InteractiveCard>
            ))}
          </div>
        </FadeInSection>
      </div>
    </PageLayout>
  )
}
