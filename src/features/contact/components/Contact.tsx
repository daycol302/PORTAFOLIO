'use client';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { SectionTitle } from '@/components/ui/section-title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ContactForm } from './ContactForm';
import { ContactInfoCard } from './ContactInfoCard';
import { socials } from '@/features/contact/data/socials';
import { siteConfig } from '@/config/site';
import { useI18n } from '@/i18n/provider';

export function Contact() {
  const { dictionary } = useI18n();
  return (
    <Section id="contact" variant="muted">
      <Container>
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <SectionTitle
              eyebrow={dictionary.contact.eyebrow}
              title={dictionary.contact.title}
              description={dictionary.contact.description}
            />

            <div className="grid gap-4">
              {socials.map((method) => (
                <ContactInfoCard key={method.name} method={method} />
              ))}
            </div>

            <Card className="overflow-hidden">
              <div className="space-y-3 p-4">
                <h3 className="text-foreground text-xl font-bold tracking-tight">
                  {dictionary.contact.cv}
                </h3>
                <p className="text-muted-foreground text-sm leading-7">
                  {dictionary.contact.cvDescription}
                </p>

                <Button asChild variant="default" className="mt-4">
                  <a href={siteConfig.links.cv} download>
                    {dictionary.contact.download}
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
